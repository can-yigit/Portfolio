"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Project } from "@/lib/api";
import { ArrowUpRightIcon, ArrowRightIcon } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean) as string[])];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from(".hero-line-1", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      timeline.from(".hero-line-2", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");

      timeline.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.4");

      timeline.from(".filter-chip", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      }, "-=0.3");

      const projectSections = document.querySelectorAll(".project-section");
      projectSections.forEach((section) => {
        gsap.from(section.querySelector(".project-content"), {
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });

        gsap.from(section.querySelector(".project-visual"), {
          opacity: 0,
          x: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, [filter]);

  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear().toString();
  };

  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = getYear(project.created_at);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  const years = Object.keys(projectsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <Header />
      <main className="main-content bg-white">
        <section className="px-6 pt-32 pb-20">
          <div className="max-w-7xl mx-auto text-center">            
            <h1 className="font-bold text-neutral-900 mb-6 leading-tight">
              <div className="hero-line-1 text-5xl md:text-6xl lg:text-7xl">
                My Most
              </div>
              <div className="hero-line-2 text-5xl md:text-6xl lg:text-7xl">
                Recent Work
              </div>
            </h1>

            <p className="hero-description text-lg md:text-xl text-neutral-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              A collection of projects I've built from web applications and API integrations to full-stack solutions. Each project showcases different technologies and approaches to modern development.
            </p>

            {categories.length > 1 && (
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`filter-chip px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      filter === cat
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {filteredProjects.length > 0 ? (
          <div className="pb-32">
            {years.map((year, yearIndex) => (
              <div key={year}>
                <div className="px-6 py-20 md:py-24 relative overflow-hidden">
                  <div className="max-w-7xl mx-auto relative">
                    <div className="flex items-center gap-8 md:gap-12">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="text-[120px] md:text-[160px] lg:text-[200px] font-black leading-none text-neutral-100 select-none">
                            {year}
                          </div>
                          <div className="absolute inset-0 text-[120px] md:text-[160px] lg:text-[200px] font-black leading-none bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">
                            {year}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-r from-neutral-300 to-transparent"></div>
                      <div className="text-sm md:text-base font-semibold text-neutral-400 uppercase tracking-wider">
                        {projectsByYear[year].length} {projectsByYear[year].length === 1 ? 'Project' : 'Projects'}
                      </div>
                    </div>
                  </div>
                </div>

                {projectsByYear[year].map((project, index) => {
                  const globalIndex = filteredProjects.findIndex(p => p.id === project.id);
                  return (
                    <section
                      key={project.id}
                      className={`project-section relative flex items-center py-24 px-6 overflow-hidden ${
                        globalIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                      }`}
                    >
                      {/* Subtle Grid Pattern */}
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                        backgroundImage: `
                          linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                      }}></div>
                      
                      {/* Subtle radial gradient */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                      
                      <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                          globalIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}>
                          <div className={`project-content ${globalIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="flex items-center gap-4 mb-6">
                              <span className="text-6xl font-bold text-neutral-200">
                                {String(globalIndex + 1).padStart(2, '0')}
                              </span>
                              {project.category && (
                                <span className="px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider">
                                  {project.category}
                                </span>
                              )}
                            </div>

                      {/* Title */}
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                              {project.title}
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                              {project.description}
                            </p>

                            {project.languages && project.languages.length > 0 && (
                        <div className="mb-8 mt-3">
                          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.languages.map((lang) => (
                              <div
                                key={lang.id}
                                className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
                              >
                                {lang.icon && (
                                  <div className="w-5 h-5 flex items-center justify-center">
                                    <img src={lang.icon} alt={lang.name} className="w-full h-full object-contain" />
                                  </div>
                                )}
                                <span className="text-sm font-semibold text-neutral-800 group-hover:text-emerald-700 transition-colors">
                                  {lang.name}
                                </span>
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400/0 to-green-400/0 group-hover:from-emerald-400/5 group-hover:to-green-400/5 transition-all duration-200"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Team */}
                      {project.authors && project.authors.length > 0 && (
                        <div className="mb-8 mt-1">
                          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                            Team
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.authors.map((author) => (
                              <div
                                key={author.id}
                                className="flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white border border-neutral-200"
                              >
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
                                  {author.avatar ? (
                                    <img
                                      src={author.avatar}
                                      alt={author.name}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                                      <span className="text-xs font-bold text-white">
                                        {author.name.charAt(0)}
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-sm font-semibold text-neutral-900">
                                  {author.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      {project.link && (
                        <div className="mt-1">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ShinyButton >
                              <span className="flex items-center gap-2">
                                View Project
                                <ArrowUpRightIcon size={20} className="group-hover:rotate-45 transition-transform" />
                              </span>
                            </ShinyButton>
                          </a>
                        </div>
                            )}
                          </div>

                          <div className={`project-visual ${globalIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
                              <div className="aspect-video relative">
                                {project.image ? (
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center">
                                    <span className="text-7xl font-bold text-white/10">
                                      {project.title.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                No projects found
              </h3>
              <p className="text-lg text-neutral-500 mb-8">
                Try selecting a different category
              </p>
              <button
                onClick={() => setFilter("All")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors"
              >
                <span>Show All Projects</span>
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
