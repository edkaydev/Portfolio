import { useState, useRef } from 'react';
import { motion, AnimatePresence,type Variants } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { PortfolioGrid } from './components/Portfolio';
import { Certificates } from './components/Certificates';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const contentRef = useRef<HTMLElement>(null);

  const slideUpVariants: Variants = { // Add the type here
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.2 } 
    }
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Smooth scroll to top of content area on mobile
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-gray-300 p-4 sm:p-6 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-start max-w-[1440px] mx-auto">
      <Sidebar />
      
      <main 
        ref={contentRef}
        className="flex-1 w-full max-w-4xl bg-brand-card border border-brand-border rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden mb-20 lg:mb-0"
      >
        {/* Responsive Navigation */}
        <nav className="
  /* Mobile: Fixed bottom */
  fixed bottom-0 left-0 right-0 w-full bg-brand-card/95 backdrop-blur-md border-t border-brand-border rounded-t-3xl px-6 py-4 flex justify-around gap-4 z-50 
  
  /* Desktop: Absolute top-right */
  lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-auto lg:bg-brand-card lg:border-b lg:border-l lg:rounded-t-none lg:rounded-bl-3xl lg:rounded-tr-3xl lg:px-10 lg:py-5 lg:justify-start lg:gap-8 lg:z-10
  
  overflow-x-auto scrollbar-hide"
>
  {['About', 'Resume', 'Certificates', 'Portfolio', 'Contact'].map((tab) => (
    <button 
      key={tab}
      onClick={() => handleTabChange(tab)}
      className={`text-sm font-bold transition-colors whitespace-nowrap ${
        activeTab === tab ? 'text-brand-accent' : 'text-brand-muted hover:text-gray-200'
      }`}
    >
      {tab}
    </button>
  ))}
</nav>

        <header className="mb-8">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {activeTab}
          </h2>
          <div className="w-10 h-1.5 bg-brand-accent rounded-full"></div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={slideUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {activeTab === 'About' && <About />}
            {activeTab === 'Resume' && <Resume />}
            {activeTab === 'Certificates' && <Certificates />}
            {activeTab === 'Portfolio' && <PortfolioGrid />}
            {activeTab === 'Contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;