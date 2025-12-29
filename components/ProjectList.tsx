
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const ProjectList: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const activeProjects = PROJECTS.filter(p => p.active);
  const displayProjects = isExpanded ? PROJECTS : activeProjects.slice(0, 4);

  const getStatusColor = (status?: string) => {
    switch(status) {
      case 'LIVE': return 'text-green-600';
      case 'COOKING': return 'text-orange-500 animate-pulse';
      case 'WIP': return 'text-blue-600';
      case 'RIP': return 'text-red-600 line-through';
      default: return 'text-black';
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col relative">
      {/* Decorative anchors */}
      <div className="absolute -left-12 top-0 hidden lg:block">
        <div className="w-1 h-24 bg-black" />
      </div>

      <div className={`${isExpanded ? 'h-[600px] border-4 border-black overflow-y-scroll brutalist-scroll bg-[#fdfdfd]' : ''} transition-all duration-500`}>
        <ul className="flex flex-col w-full">
          {displayProjects.map((project, idx) => (
            <li 
              key={project.id}
              className="group border-b-4 border-black last:border-b-0 overflow-hidden relative bg-white"
            >
              <a 
                href={project.href} 
                className="flex items-center justify-between py-8 px-4 transition-all group-hover:bg-black group-hover:text-white"
              >
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="text-xs font-bold opacity-30 group-hover:opacity-100 font-mono">[{idx + 1}]</span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:line-through transition-all">
                        {project.name}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-1 border-2 border-current ${getStatusColor(project.status)} group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors`}>
                        {project.status || '??'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] block mb-1 opacity-50 group-hover:opacity-100">
                    ID / {project.status === 'RIP' ? '0XDEAD' : '0X0' + project.id}
                  </span>
                  <span className="text-xs uppercase font-bold group-hover:text-white">
                    {project.description}
                  </span>
                </div>
              </a>
              {/* Decorative Corner Label on Hover */}
              <div className="absolute top-2 right-2 text-[8px] font-bold hidden group-hover:block text-white opacity-40">
                {project.status === 'RIP' ? 'SYS_LINK_BROKEN' : 'PAYLOAD_VERIFIED'}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-8 w-full border-4 border-black py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all text-sm flex items-center justify-center gap-4 group relative overflow-hidden"
      >
        <div className="absolute inset-0 stripe-bg opacity-0 group-hover:opacity-10 transition-opacity" />
        <span className="relative z-10">
          {isExpanded ? '[−] CLOSE ARCHIVE' : `[+] EXPLORE FULL DIRECTORY (${PROJECTS.length})`}
        </span>
      </button>
      
      {isExpanded && (
        <div className="text-[10px] font-bold opacity-30 mt-2 text-center uppercase tracking-widest">
          Scroll inside box to see more
        </div>
      )}
    </div>
  );
};

export default ProjectList;
