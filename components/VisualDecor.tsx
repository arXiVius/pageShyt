
import React from 'react';

export const ZebraBox: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`stripe-bg ${className}`} />
);

export const AbstractCross: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`w-8 h-8 fill-black ${className}`}>
    <rect x="45" y="0" width="10" height="100" />
    <rect x="0" y="45" width="100" height="10" />
  </svg>
);

export const AbstractCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`w-24 h-24 ${className}`}>
    <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="8" fill="none" strokeDasharray="15 5" />
  </svg>
);

export const ScanLines: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03]" 
       style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
);
