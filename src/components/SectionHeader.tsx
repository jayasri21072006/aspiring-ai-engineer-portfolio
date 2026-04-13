import React from 'react';

interface SectionHeaderProps {
  title: string;
  sub: string;
}

const SectionHeader = ({ title, sub }: SectionHeaderProps) => (
  <div className="text-center mb-16 relative z-10">
    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-2">{sub}</p>
    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 mb-4 tracking-tighter leading-none">{title}</h2>
    <div className="mt-6 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_20px_rgba(124,58,237,0.4)]" />
  </div>
);

export default SectionHeader;
