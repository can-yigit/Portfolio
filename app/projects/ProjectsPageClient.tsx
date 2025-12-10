"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Project } from "@/lib/api";
import { ArrowUpRightIcon, ArrowRightIcon } from "lucide-react";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

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
            {years.map((year) => (
              <div key={year}>
                <div className="px-6 py-16">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-neutral-900">{year}</h2>
                    <div className="h-1 w-20 bg-neutral-900 mt-4" />
                  </div>
                </div>

                {projectsByYear[year].map((project, index) => {
                  const globalIndex = filteredProjects.findIndex(p => p.id === project.id);
                  return (
                    <section
                      key={project.id}
                      className={`project-section flex items-center py-24 px-6 ${
                        globalIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                      }`}
                    >
                      <div className="max-w-7xl mx-auto w-full">
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

                            <div className="flex items-center gap-6 mb-8">
                        {project.authors && project.authors.length > 0 && (
                          <div>
                            <p className="text-xs text-neutral-400 font-medium mb-1">Team</p>
                            <p className="text-lg font-bold text-neutral-900">{project.authors.length}</p>
                          </div>
                              )}
                            </div>

                            {project.languages && project.languages.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.languages.map((lang) => (
                              <div
                                key={lang.id}
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-neutral-200"
                              >
                                {lang.icon && (
                                  <img src={lang.icon} alt={lang.name} className="w-4 h-4" />
                                )}
                                <span className="text-sm font-semibold text-neutral-900">
                                  {lang.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Team */}
                      {project.authors && project.authors.length > 0 && (
                        <div className="mb-8">
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
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-all hover:gap-4 group"
                        >
                          <span>View Project</span>
                          <ArrowUpRightIcon size={20} className="group-hover:rotate-45 transition-transform" />
                              </a>
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
