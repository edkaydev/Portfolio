import { useState, useRef } from 'react';
import { motion, AnimatePresence,type Variants } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { PortfolioGrid } from './components/Portfolio';
import { Certificates } from './components/Certificates';
import { personalInfo, aboutData } from './data/data';

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
    <div className="min-h-screen text-gray-300 bg-brand-black">
      <Helmet>
        <title>{`${activeTab} | ${personalInfo.brandName} - ${personalInfo.role}`}</title>
        <meta name="description" content={aboutData.description[0]} />
      </Helmet>

      {/* Top-level viewport container with max-width and symmetrical padding */}
      <div className="w-full px-4 py-6 mx-auto max-w-7xl md:px-8 lg:px-12 lg:py-12">
        {/* Two-column grid separation for Sidebar and Main Panel */}
        <div className="flex flex-col items-start justify-center gap-6 lg:flex-row lg:gap-8">
          <Sidebar />
          <main 
            ref={contentRef}
            className="relative flex-1 w-full p-6 mb-20 overflow-hidden border bg-brand-card border-brand-border rounded-3xl sm:p-8 lg:p-12 lg:mb-0"
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
      </div>
    </div>
  );
}

export default App;