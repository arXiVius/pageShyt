
import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import FooterCredits from './components/FooterCredits';
import Marquee from './components/Marquee';
import { ZebraBox, AbstractCross, AbstractCircle, ScanLines } from './components/VisualDecor';

const App: React.FC = () => {
  const [loadPercent, setLoadPercent] = useState(69);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercent(p => (p < 99 ? p + Math.floor(Math.random() * 2) : 99));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative">
      <ScanLines />
      {/* Background Decor */}
      <div className="fixed inset-0 technical-grid pointer-events-none z-0" />
      
      {/* Top Ticker */}
      <Marquee />

      {/* Side Label - Fixed */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 vertical-text text-[10px] font-bold tracking-[0.5em] uppercase opacity-20 pointer-events-none z-10 hidden lg:block">
        CHRONICALLY_ONLINE_SINCE_BIRTH // RATIOED
      </div>

      {/* Abstract Shapes Scattered */}
      <AbstractCross className="fixed top-24 left-12 opacity-10 pointer-events-none" />
      <AbstractCircle className="fixed bottom-32 right-12 opacity-10 pointer-events-none" />
      <ZebraBox className="fixed top-0 right-0 w-32 h-screen opacity-5 pointer-events-none hidden xl:block" />

      {/* Decorative Stamp Corner */}
      <div className="fixed top-12 right-12 w-32 h-32 border-2 border-black rounded-full flex items-center justify-center text-[8px] font-bold text-center leading-tight rotate-12 opacity-10 pointer-events-none z-10">
        CERTIFIED<br/>BRUHMOMENT<br/>AUTHENTIC
      </div>

      {/* Fake Progress Bar */}
      <div className="fixed bottom-12 left-6 z-[100] flex flex-col items-start gap-1">
        <div className="text-[8px] font-bold uppercase opacity-40 italic">Downloading personality... {loadPercent}%</div>
        <div className="w-32 h-1 bg-black/10 border border-black/5">
          <div className="h-full bg-black transition-all duration-1000" style={{ width: `${loadPercent}%` }} />
        </div>
      </div>

      <header className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Massive Monochromatic Title */}
        <div className="relative group">
          <h1 className="text-[18vw] md:text-[15vw] leading-[0.75] font-black uppercase tracking-tighter scale-y-125 group-hover:scale-x-110 transition-transform duration-500 cursor-default select-none relative z-10">
            PAGE<br/>SHYT
          </h1>
          <div className="absolute -inset-4 bg-black opacity-0 group-hover:opacity-5 transition-opacity -z-10 skew-x-12" />
        </div>
        
        <div className="mt-16 border-2 border-black px-6 py-2 font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-black hover:text-white transition-colors cursor-crosshair flicker-hover relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black hidden md:block" />
          CLICK ME OR DON'T I'M A WEBSITE NOT A COP
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black hidden md:block" />
        </div>

        <div className="mt-8 text-[10px] uppercase font-mono opacity-30">
          Scroll down to lose interest instantly ↓
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center pb-32">
        <section className="w-full flex flex-col items-center px-6 relative">
          {/* Section Decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-black opacity-10" />
          
          <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-end mb-12 border-b-8 border-black pb-4 mt-20">
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">DA LIST</h2>
              <div className="w-8 h-8 border-4 border-black animate-spin duration-[4s]" />
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">THE BRAINROT INDEX</p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-none">Vol. 01: "I'm Bored"</p>
            </div>
          </div>
          
          <ProjectList />
        </section>

        <section className="mt-48 w-full max-w-3xl px-6 relative">
           {/* Abstract Geometric Element */}
          <div className="absolute -top-12 -right-12 w-24 h-24 border-8 border-black/5 rounded-full pointer-events-none" />

          <div className="border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 stripe-bg opacity-5 -mr-16 -mt-16 rotate-45" />
            
            <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2 relative z-10">
              Manifesto
              <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-mono">(READ_LOG_001)</span>
            </h3>
            <p className="text-sm font-bold leading-relaxed opacity-70 relative z-10">
              I SPENT 4 HOURS FIGURING OUT HOW TO MAKE THIS TEXT LOOK UGLY ON PURPOSE. 
              MINIMALISM IS JUST AN EXCUSE FOR BEING LAZY. 
              IF YOU DON'T LIKE IT, THAT'S LITERALLY A SKILL ISSUE.
            </p>
            <div className="mt-6 flex gap-2 relative z-10">
              <div className="w-4 h-4 bg-black animate-pulse" />
              <div className="w-4 h-4 bg-black/50" />
              <div className="w-4 h-4 bg-black/20" />
              <div className="w-4 h-4 bg-black/5" />
              <span className="text-[10px] font-bold ml-2">← vibe check</span>
            </div>
          </div>
        </section>

        <FooterCredits />
      </main>

      {/* Decorative footer line */}
      <div className="w-full h-8 bg-black mt-20 relative overflow-hidden">
         <div className="absolute inset-0 flex items-center justify-around opacity-20 text-[8px] text-white font-bold tracking-[2em] uppercase whitespace-nowrap">
            skibidi gyatt rizzler skibidi gyatt rizzler skibidi gyatt rizzler
         </div>
      </div>
    </div>
  );
};

export default App;
