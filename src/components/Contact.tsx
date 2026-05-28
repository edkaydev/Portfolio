"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, User, Sparkles, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const Contact = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [userId, setUserId] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 1. Generate or retrieve persistent session cookie for the user handle
  useEffect(() => {
    let storedId = localStorage.getItem('manira_chat_session');
    if (!storedId) {
      storedId = `web_${Math.random().toString(36).substring(2, 11)}`;
      localStorage.setItem('manira_chat_session', storedId);
    }
    setUserId(storedId);

    // Initial greeting configuration echoing your backend handler main menu hooks
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "👋 Hello! Welcome to the Interactive Project Intake Engine.\n\nReply with **1** to learn about Edward's developer options, or reply with **2** to explore the Manira Marketplace platform ecosystem directly. Let's build!",
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isBotTyping]);

  // 2. Execute Async Network payload transfer to DigitalOcean Droplet Core
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isBotTyping) return;

    const userText = inputMessage.trim();
    setInputMessage('');

    const userMsg: Message = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsBotTyping(true);

    try {
      const response = await fetch('http://192.81.209.164:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, userId })
      });

      if (!response.ok) throw new Error('Network transport error');

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: data.reply || "Something went wrong processing that payload. Text 'menu' to reset.",
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: "❌ Service Node Offline. The cloud container gateway is experiencing network congestion or standard timeout filters. Please text 'menu' to reset state lines.",
        timestamp: new Date()
      }]);
    } finally {
      setIsBotTyping(false);
    }
  };

  const resetSession = () => {
    setInputMessage('menu');
    setTimeout(() => { setInputMessage(''); }, 10);
  };

  return (
    <section className="w-full max-w-4xl px-4 mx-auto my-12 selection:bg-orange-500/20">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight uppercase md:text-3xl text-slate-100">
          Initiate <span className="text-orange-500">Collaboration</span>
        </h2>
        <p className="mt-2 text-xs font-medium tracking-wide md:text-sm text-slate-400">
          Skip standard web forms. Interact directly with my automated cloud-hosted project intake engine pipeline below.
        </p>
      </div>

      <div className="bg-[#1e293b]/90 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md flex flex-col h-[550px]">
        <div className="bg-[#0f172a] px-6 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="block w-3 h-3 rounded-full bg-red-500/80" />
              <span className="block w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="block w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-slate-800 mx-1" />
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest font-bold">
              <Terminal size={12} className="text-orange-500" />
              <span>droplet_node_stream_v1.0.0</span>
            </div>
          </div>
          <button 
            onClick={resetSession}
            type="button"
            title="Reset Terminal System State"
            className="p-1.5 text-slate-400 hover:text-orange-500 hover:bg-slate-800 rounded-lg transition-all"
          >
            <RefreshCw size={13} className={isBotTyping ? 'animate-spin' : ''} />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar bg-[#0f172a]/20">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex w-full items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="flex items-center justify-center text-orange-500 border rounded-lg w-7 h-7 bg-orange-500/10 border-orange-500/30 shrink-0">
                    <Sparkles size={14} />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-semibold whitespace-pre-wrap leading-relaxed tracking-wide ${
                  msg.sender === 'user'
                    ? 'bg-orange-500 text-white rounded-tr-none shadow-md font-medium'
                    : 'bg-[#1e293b] border border-slate-700/40 text-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="flex items-center justify-center border rounded-lg w-7 h-7 bg-slate-800 border-slate-700 text-slate-400 shrink-0">
                    <User size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {isBotTyping && (
            <div className="flex items-start justify-start w-full gap-3">
              <div className="flex items-center justify-center text-orange-500 border rounded-lg w-7 h-7 bg-orange-500/10 border-orange-500/30 shrink-0 animate-pulse">
                <Sparkles size={14} />
              </div>
              <div className="bg-[#1e293b] border border-slate-700/40 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-[#0f172a] border-t border-slate-800 flex items-center gap-3 shrink-0">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your response string (e.g. 1, 2, or project description)..."
            disabled={isBotTyping}
            className="flex-1 bg-[#1e293b] border border-slate-700/60 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || isBotTyping}
            className="flex items-center justify-center text-white transition-all bg-orange-500 shadow-md h-11 w-11 hover:bg-orange-600 disabled:bg-slate-800 disabled:text-slate-600 rounded-xl shrink-0 active:scale-95"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};
