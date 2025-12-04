"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeartHandshakeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Marquee } from "@/components/ui/marquee";
import { Globe } from "@/components/ui/globe";
import { Safari } from "@/components/ui/safari";
import { getTechStack, TechStack } from "@/lib/api";

gsap.registerPlugin(ScrollTrigger);

// Client avatars for collaboration card
const clients = [
  { name: "HEPTACOM", color: "bg-blue-500" },
  { name: "Client 2", color: "bg-emerald-500" },
  { name: "Client 3", color: "bg-teal-500" },
  { name: "Client 4", color: "bg-amber-500" },
];
  
// 1. Collaboration Background - Wide card top with hover animation
function CollaborationBackground() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(110, 231, 183)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Lines from center to clients */}
        <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </svg>

      {/* Client avatars that appear on hover */}
      <div className={`absolute left-[10%] top-[25%] transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className={`w-10 h-10 rounded-full ${clients[0].color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          H
        </div>
      </div>
      <div className={`absolute right-[10%] top-[25%] transition-all duration-500 delay-75 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className={`w-10 h-10 rounded-full ${clients[1].color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          C2
        </div>
      </div>
      <div className={`absolute left-[15%] bottom-[20%] transition-all duration-500 delay-100 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className={`w-10 h-10 rounded-full ${clients[2].color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          C3
        </div>
      </div>
      <div className={`absolute right-[15%] bottom-[20%] transition-all duration-500 delay-150 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className={`w-10 h-10 rounded-full ${clients[3].color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          C4
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute flex items-center gap-0 z-10">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-neutral-200/40 bg-neutral-50/30 transition-all duration-500 ${isHovered ? 'scale-90 opacity-60' : ''}`} />
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-neutral-200/50 bg-neutral-50/40 -ml-4 md:-ml-5 transition-all duration-500 ${isHovered ? 'scale-90 opacity-60' : ''}`} />
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-3 border-emerald-300/60 bg-white shadow-xl -ml-4 md:-ml-5 overflow-hidden z-10 ring-4 ring-emerald-100/50">
          <img 
            src="/profile.png" 
            alt="Can Yigit" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-neutral-200/50 bg-neutral-50/40 -ml-4 md:-ml-5 transition-all duration-500 ${isHovered ? 'scale-90 opacity-60' : ''}`} />
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-neutral-200/40 bg-neutral-50/30 -ml-4 md:-ml-5 transition-all duration-500 ${isHovered ? 'scale-90 opacity-60' : ''}`} />
      </div>
    </div>
  );
}

// 2. Tech Marquee Component - Tall card (1 col, 2 rows)
function TechMarquee() {
  const [techItems, setTechItems] = useState<TechStack[]>([]);

  useEffect(() => {
    getTechStack().then(setTechItems);
  }, []);

  if (techItems.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 flex flex-col justify-start gap-2 md:gap-3 px-2 pt-3 md:pt-4 overflow-hidden">
      {/* Header */}
      <div className="text-center px-3 md:px-4 pt-1 md:pt-2 pb-1 md:pb-2 z-20">
        <p className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wider mb-1">My Stack</p>
        <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent">
          Technologies I love
        </h3>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-1.5 md:gap-2">
        <Marquee pauseOnHover className="[--duration:25s]">
          {techItems.slice(0, 7).map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-full bg-white border border-neutral-200 shadow-sm"
            >
              <img src={tech.icon} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium text-neutral-700">{tech.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:30s]">
          {techItems.slice(7).map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-full bg-white border border-neutral-200 shadow-sm"
            >
              <img src={tech.icon} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium text-neutral-700">{tech.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:22s]">
          {[...techItems.slice(3, 10)].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-full bg-white border border-neutral-200 shadow-sm"
            >
              <img src={tech.icon} alt={tech.name} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium text-neutral-700">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}

// 3. Globe Background Component - Globe at bottom, only top half visible
function GlobeBackground() {
  return (
    <div className="absolute inset-0 flex flex-col items-center overflow-hidden">
      {/* Header section */}
      <div className="pt-4 md:pt-6 px-4 text-center z-20">
        <p className="text-[10px] md:text-xs text-neutral-400 uppercase tracking-wider mb-2">Remote Ready</p>
        <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent leading-tight mb-3">
          Available worldwide
        </h3>
        {/* Country flags */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          <div className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/90 border border-neutral-200 shadow-sm">
            <span className="text-xs md:text-sm">🇬🇧</span>
            <span className="text-[10px] md:text-xs font-medium text-neutral-600">UK</span>
          </div>
          <div className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-green-50 border border-green-200 shadow-sm">
            <span className="text-xs md:text-sm">🇩🇪</span>
            <span className="text-[10px] md:text-xs font-medium text-green-700">Germany</span>
          </div>
          <div className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/90 border border-neutral-200 shadow-sm">
            <span className="text-xs md:text-sm">🇺🇸</span>
            <span className="text-[10px] md:text-xs font-medium text-neutral-600">USA</span>
          </div>
        </div>
      </div>
      
      {/* Globe at bottom - only top half visible */}
      <div className="absolute -bottom-[50%] left-1/2 -translate-x-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] z-0">
        <Globe
          className="w-full h-full"
          speed={0.002}
          config={{
            width: 800,
            height: 800,
            devicePixelRatio: 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 0.8,
            mapSamples: 20000,
            mapBrightness: 1.2,
            baseColor: [0.9, 0.9, 0.93],
            markerColor: [0.16, 0.73, 0.51],
            glowColor: [0.8, 0.8, 0.9],
            markers: [
              { location: [53.0793, 8.8017], size: 0.08 },
              { location: [51.5074, -0.1278], size: 0.06 },
              { location: [40.7128, -74.006], size: 0.06 },
            ],
            onRender: () => {},
          }}
        />
      </div>
    </div>
  );
}

// 4. Contact CTA Background - Small center card
function ContactBackground() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-5">
      <h3 className="text-lg md:text-xl text-neutral-400 leading-snug mb-3" style={{ fontFamily: 'Georgia, serif' }}>
        Let's work <span className="italic text-neutral-500">together</span>
        <br />
        on your next <span className="italic text-neutral-500">project</span>
      </h3>
      <a 
        href="mailto:info@canyigit.com" 
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 hover:border-neutral-300 transition-all group"
      >
        <svg className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <span className="text-xs md:text-sm font-medium text-neutral-600">info@canyigit.com</span>
      </a>
    </div>
  );
}

// 5. Safari Preview Component - Wide card bottom
function SafariPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100/50">
      {/* Left side content */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10">
        <h3 className="text-lg md:text-xl font-semibold text-neutral-800 mb-0.5">
          Websites that
        </h3>
        <h3 className="text-lg md:text-xl font-semibold text-emerald-500 mb-2 md:mb-3">
          Impact.
        </h3>
        <div className="flex items-center gap-2">
          <a href="#" className="px-3 md:px-4 py-1.5 md:py-2 bg-neutral-900 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-1">
            Start
            <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
            Details
          </a>
        </div>
      </div>
      {/* Safari preview on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] md:w-[50%]">
        <Safari
          url="yigit.dev"
          imageSrc="/image.png"
          className="w-full rounded-xl shadow-2xl translate-x-4 md:translate-x-8"
        />
      </div>
    </div>
  );
}

/*
  Grid Layout (3 columns):
  | 1  | 1  | 2  |
  | 3  | 4  | 2  |
  | 3  | 5  | 5  |
*/

export default function PortfolioGrid() {
  const gridRef = useRef<HTMLElement>(null);

  const features = [
    // 1. Collaboration - Row 1, Cols 1-2
    {
      Icon: HeartHandshakeIcon,
      name: "Collaboration",
      description: "Building lasting partnerships through open communication",
      className: "col-span-3 md:col-span-2 md:col-start-1 md:row-start-1",
      background: <CollaborationBackground />,
    },
    // 2. Tech Stack - Col 3, Rows 1-2
    {
      name: "",
      description: "",
      className: "col-span-3 md:col-span-1 md:col-start-3 md:row-start-1 md:row-span-2",
      background: <TechMarquee />,
    },
    // 3. Globe - Col 1, Rows 2-3
    {
      name: "",
      description: "",
      className: "col-span-3 md:col-span-1 md:col-start-1 md:row-start-2 md:row-span-2",
      background: <GlobeBackground />,
    },
    // 4. Contact - Col 2, Row 2
    {
      name: "",
      description: "",
      className: "col-span-3 md:col-span-1 md:col-start-2 md:row-start-2",
      background: <ContactBackground />,
    },
    // 5. Safari Banner - Cols 2-3, Row 3
    {
      name: "",
      description: "",
      className: "col-span-3 md:col-span-2 md:col-start-2 md:row-start-3",
      background: <SafariPreview />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card-animate", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={gridRef} className="py-16 px-4" id="portfolio">
      <BentoGrid className="max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className={cn("bento-card-animate h-full", feature.className)}>
            <BentoCard {...feature} className="" />
          </div>
        ))}
      </BentoGrid>
    </section>
  );
}
