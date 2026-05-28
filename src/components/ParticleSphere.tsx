import React, { useEffect, useRef } from 'react';

export const ParticleSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; z: number; initialX: number; initialY: number; initialZ: number }[] = [];
    const count = 350;
    const radius = 140;

    // Generate points on a sphere using Fibonacci lattice for uniform distribution
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particles.push({ x, y, z, initialX: x, initialY: y, initialZ: z });
    }

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.003;

      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      particles.forEach((p) => {
        // Rotate around Y axis
        const x1 = p.initialX * cos - p.initialZ * sin;
        const z1 = p.initialX * sin + p.initialZ * cos;
        
        // Rotate around X axis slightly
        const y1 = p.initialY * Math.cos(rotation * 0.5) - z1 * Math.sin(rotation * 0.5);
        const z2 = p.initialY * Math.sin(rotation * 0.5) + z1 * Math.cos(rotation * 0.5);

        // Project to 2D
        const perspective = 400 / (400 + z2);
        const x2d = x1 * perspective;
        const y2d = y1 * perspective;

        // Alpha based on depth
        const alpha = (z2 + radius) / (2 * radius);
        
        ctx.beginPath();
        ctx.arc(x2d, y2d, Math.max(0.5, 1.5 * perspective), 0, Math.PI * 2);
        // Using your brand-accent #0A84FF
        ctx.fillStyle = `rgba(10, 132, 255, ${alpha * 0.8})`;
        ctx.fill();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="w-full h-full pointer-events-none opacity-50"
    />
  );
};