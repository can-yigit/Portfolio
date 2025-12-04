"use client";

import { useState } from "react";
import { Project } from "@/lib/api";
import { ArrowUpRightIcon } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function ProjectGrid({ data }: { data: Project[] }) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleCardClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((project) => (
        <div 
          key={project.id} 
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          onClick={() => handleCardClick(project.link)}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePosition({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={project.image || ""} 
              alt={project.title} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
            />
            
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            
            {(project.category || project.description) && (
              <div 
                className={`absolute top-4 left-4 z-10 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                  <span>{project.category || project.description}</span>
                  <ArrowRightIcon className="size-3" />
                </span>
              </div>
            )}
            
            <div 
              className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight max-w-[70%]">
                  {project.title}
                </h3>
                
                {project.link && (
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 pointer-events-none flex-shrink-0">
                    <ArrowUpRightIcon size={18} className="text-white" />
                  </div>
                )}
              </div>
            </div>

            {hoveredProject === project.id && (
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="px-3 py-1.5 bg-black/90 backdrop-blur-sm rounded-full text-xs font-medium text-white whitespace-nowrap">
                  {project.title}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}