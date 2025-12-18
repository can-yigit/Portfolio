"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import { Project } from "@/lib/api";
import { ArrowUpRightIcon } from "lucide-react";

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const [filter, setFilter] = useState<string>("All");
  const headerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean) as string[])];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear().toString();
  };

  // Initial animation - nur für Header
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-title", 
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(".hero-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: "power2.out" }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="min-h-screen" ref={headerRef}>
        <div className="max-w-[700px] mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="hero-title text-3xl md:text-4xl font-bold text-neutral-900 mb-3 tracking-tight">
              My Work
            </h1>
            <p className="hero-description text-neutral-500 text-sm max-w-md mx-auto leading-relaxed">
              A curated collection of projects showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>

          {/* Filter */}
          {categories.length > 1 && (
            <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
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

          {/* Projects Grid - 2 columns */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
                        <span className="text-4xl font-bold text-neutral-200">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {/* Year Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-medium text-neutral-600">
                        {getYear(project.created_at)}
                      </span>
                    </div>

                    {/* Hover Overlay with Link */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <ArrowUpRightIcon size={18} className="text-neutral-900" />
                        </div>
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Category */}
                    {project.category && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-neutral-100 text-[10px] font-medium text-neutral-500 uppercase tracking-wider mb-2">
                        {project.category}
                      </span>
                    )}
                    
                    {/* Title */}
                    <h2 className="text-base font-semibold text-neutral-900 mb-1.5 line-clamp-1">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs text-neutral-500 line-clamp-2 mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Footer: Tech + Authors */}
                    <div className="flex items-center justify-between">
                      {/* Tech Stack */}
                      {project.languages && project.languages.length > 0 && (
                        <div className="flex items-center gap-1">
                          {project.languages.slice(0, 3).map((lang) => (
                            <div
                              key={lang.id}
                              className="w-5 h-5 rounded bg-neutral-50 border border-neutral-100 flex items-center justify-center"
                              title={lang.name}
                            >
                              {lang.icon ? (
                                <img src={lang.icon} alt={lang.name} className="w-3 h-3" />
                              ) : (
                                <span className="text-[8px] font-medium text-neutral-400">
                                  {lang.name.charAt(0)}
                                </span>
                              )}
                            </div>
                          ))}
                          {project.languages.length > 3 && (
                            <span className="text-[10px] text-neutral-400 ml-0.5">
                              +{project.languages.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Authors */}
                      {project.authors && project.authors.length > 0 && (
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center -space-x-1.5">
                            {project.authors.slice(0, 2).map((author) => (
                              <div
                                key={author.id}
                                className="w-5 h-5 rounded-full border-2 border-white overflow-hidden bg-neutral-200"
                              >
                                {author.avatar ? (
                                  <img
                                    src={author.avatar}
                                    alt={author.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-neutral-300">
                                    <span className="text-[7px] font-semibold text-neutral-600">
                                      {author.name.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          <span className="text-[10px] text-neutral-500 truncate max-w-[80px]">
                            {project.authors.length === 1 
                              ? project.authors[0].name
                              : `${project.authors[0].name} +${project.authors.length - 1}`
                            }
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-400 mb-4">No projects found</p>
              <button
                onClick={() => setFilter("All")}
                className="text-sm font-medium text-neutral-900 hover:underline"
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
