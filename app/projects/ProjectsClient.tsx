"use client";

import { useState } from "react";
import { ArrowUpRightIcon, XIcon } from "lucide-react";
import { Project } from "@/lib/api";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear().toString();
  };

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(p => p.category).filter(Boolean) as string[])];
  
  // Filter projects
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-medium text-neutral-400 tracking-wide">PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mt-2 mb-6">
            Projects
          </h1>
          
          {/* Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    filter === cat
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-400">No projects found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                        <span className="text-5xl font-bold text-neutral-300">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                        <ArrowUpRightIcon size={20} className="text-neutral-900" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {project.title}
                      </h2>
                      <span className="text-sm text-neutral-400 flex-shrink-0">
                        {getYear(project.created_at)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-neutral-500 line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      {/* Tech Stack */}
                      {project.languages && project.languages.length > 0 && (
                        <div className="flex items-center gap-1.5">
                          {project.languages.slice(0, 4).map((lang) => (
                            <div
                              key={lang.id}
                              className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center"
                              title={lang.name}
                            >
                              {lang.icon ? (
                                <img src={lang.icon} alt={lang.name} className="w-4 h-4" />
                              ) : (
                                <span className="text-[10px] font-medium text-neutral-500">
                                  {lang.name.charAt(0)}
                                </span>
                              )}
                            </div>
                          ))}
                          {project.languages.length > 4 && (
                            <span className="text-xs text-neutral-400">
                              +{project.languages.length - 4}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Authors */}
                      {project.authors && project.authors.length > 0 && (
                        <div className="flex items-center -space-x-2">
                          {project.authors.slice(0, 3).map((author) => (
                            <div
                              key={author.id}
                              className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-neutral-200"
                              title={author.name}
                            >
                              {author.avatar ? (
                                <img
                                  src={author.avatar}
                                  alt={author.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-neutral-300">
                                  <span className="text-[10px] font-medium text-neutral-600">
                                    {author.name.charAt(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-colors"
            >
              <XIcon size={20} />
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image */}
              <div className="aspect-video bg-neutral-100">
                {selectedProject.image ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                    <span className="text-7xl font-bold text-neutral-300">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {selectedProject.category && (
                        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                          {selectedProject.category}
                        </span>
                      )}
                      {selectedProject.category && <span className="text-neutral-300">·</span>}
                      <span className="text-xs text-neutral-400">
                        {getYear(selectedProject.created_at)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors flex-shrink-0"
                    >
                      <span>Visit Project</span>
                      <ArrowUpRightIcon size={16} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                {selectedProject.languages && selectedProject.languages.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-neutral-900 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.languages.map((lang) => (
                        <div
                          key={lang.id}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100"
                        >
                          {lang.icon && (
                            <img src={lang.icon} alt={lang.name} className="w-4 h-4" />
                          )}
                          <span className="text-sm font-medium text-neutral-700">{lang.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Authors */}
                {selectedProject.authors && selectedProject.authors.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900 mb-3">Team</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.authors.map((author) => (
                        <div key={author.id} className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
                            {author.avatar ? (
                              <img
                                src={author.avatar}
                                alt={author.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-neutral-300">
                                <span className="text-xs font-medium text-neutral-600">
                                  {author.name.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          <span className="text-sm text-neutral-700">{author.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
