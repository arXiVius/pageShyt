
import React, { useState } from 'react';

const FooterCredits: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block mt-auto pt-12 pb-8">
      <div 
        className="text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none group border-t-4 border-black pt-4"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="opacity-60">made by </span>
        <span className="font-bold inline-flex">
          <span>ar</span>
          <span className="relative">
            {isHovered ? (
              <span className="text-white bg-black px-0.5">quando</span>
            ) : (
              <span>xivius</span>
            )}
          </span>
        </span>
        <span className="opacity-40 ml-2">— last updated when I felt like it</span>
      </div>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-4 bg-black text-white p-4 border-4 border-black flex flex-col gap-2 z-50 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-2">
          <div className="text-[8px] mb-2 border-b border-white/20 pb-1 font-mono">LINK_SELECTION:</div>
          <a 
            href="https://instagram.com/sum.rov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:bg-white hover:text-black px-2 py-1 flex justify-between items-center gap-8 transition-colors font-bold text-xs"
          >
            <span>IG ACCOUNT</span>
            <span className="text-[8px] opacity-60">@SUM.ROV</span>
          </a>
          <a 
            href="https://github.com/arxivius" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:bg-white hover:text-black px-2 py-1 flex justify-between items-center gap-8 transition-colors font-bold text-xs"
          >
            <span>GITHUB ACC</span>
            <span className="text-[8px] opacity-60">@ARXIVIUS</span>
          </a>
                    <a 
            href="https://arxivius.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:bg-white hover:text-black px-2 py-1 flex justify-between items-center gap-8 transition-colors font-bold text-xs"
          >
            <span>PORTFOLIO</span>
            <span className="text-[8px] opacity-60">@SITE</span>
          </a>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            className="mt-2 text-[8px] text-center opacity-40 hover:opacity-100 transition-opacity border-t border-white/20 pt-2"
          >
            [CLOSE_MENU]
          </button>
        </div>
      )}
    </div>
  );
};

export default FooterCredits;
