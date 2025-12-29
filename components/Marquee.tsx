
import React from 'react';

const Marquee: React.FC = () => {
  const text = " DON'T ASK WHY I BUILT THIS // MY KEYBOARD IS STICKY // 100% ORGANIC BRAINROT // FOLLOWING BACK IF YOU HAVE A COOL PFP // ERROR 404: PERSONALITY NOT FOUND // LMAO WHO READS THIS // ";
  return (
    <div className="w-full bg-black text-white py-1 overflow-hidden whitespace-nowrap border-b-2 border-black z-[100] fixed top-0 select-none">
      <div className="flex animate-marquee">
        <span className="text-[10px] font-bold tracking-widest">{text}{text}{text}{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
