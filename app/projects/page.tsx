"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, StarIcon, FolderIcon } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully-featured online store built with Shopware 6, featuring custom plugins, headless storefront integration, and optimized checkout flow.",
    longDescription: "Complete e-commerce solution handling 10k+ products with advanced filtering, multi-currency support, and seamless payment integration.",
    tech: ["Shopware 6", "PHP", "Vue.js", "MySQL", "Docker"],
    category: "E-Commerce",
    featured: true,
    image: "/image.png",
    liveUrl: "https://example.com",
    githubUrl: null,
    stats: { stars: 0, forks: 0 },
    year: "2024",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description: "This portfolio website built with Next.js 15, featuring smooth animations, dark mode, and a modern bento grid layout.",
    longDescription: "Personal portfolio showcasing projects and skills with GSAP animations, responsive design, and optimized performance.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "Web App",
    featured: true,
    image: null,
    liveUrl: "https://yigit.dev",
    githubUrl: "https://github.com/can-yigit/portfolio",
    stats: { stars: 12, forks: 3 },
    year: "2024",
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "Microservice gateway handling authentication, rate limiting, and request routing for a distributed system architecture.",
    longDescription: "High-performance API gateway processing 1M+ requests daily with JWT auth, caching layer, and comprehensive logging.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Backend",
    featured: true,
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/can-yigit/api-gateway",
    stats: { stars: 45, forks: 8 },
    year: "2024",
  },
  {
    id: 4,
    title: "Design System",
    description: "Component library with 50+ reusable UI components, documentation, and Figma integration for consistent design.",
    longDescription: "Comprehensive design system with accessibility-first components, theming support, and automated visual testing.",
    tech: ["React", "TypeScript", "Storybook", "Figma", "Jest"],
    category: "UI Library",
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/can-yigit/design-system",
    stats: { stars: 28, forks: 5 },
    year: "2023",
  },
  {
    id: 5,
    title: "Real-time Dashboard",
    description: "Analytics dashboard with live data streaming, interactive charts, and customizable widgets for monitoring KPIs.",
    longDescription: "Business intelligence tool with WebSocket updates, drag-and-drop layout, and export capabilities.",
    tech: ["React", "Node.js", "Socket.io", "D3.js", "MongoDB"],
    category: "Web App",
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/can-yigit/dashboard",
    stats: { stars: 15, forks: 2 },
    year: "2023",
  },
  {
    id: 6,
    title: "CLI Tool for Shopware",
    description: "Command-line interface for scaffolding Shopware plugins, managing configs, and automating deployment tasks.",
    longDescription: "Developer productivity tool that reduces plugin setup time by 80% with templates and best practices built-in.",
    tech: ["Node.js", "TypeScript", "Commander.js", "Shopware"],
    category: "Developer Tool",
    featured: false,
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/can-yigit/sw-cli",
    stats: { stars: 67, forks: 12 },
    year: "2023",
  },
];

const categories = ["All", "E-Commerce", "Web App", "Backend", "UI Library", "Developer Tool"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <Header />
      <main className="main-content min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-violet-200/20 dark:from-violet-900/10 via-purple-200/10 dark:via-purple-900/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-indigo-200/20 dark:from-indigo-900/10 via-blue-200/10 dark:via-blue-900/5 to-transparent rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium mb-4">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              My Work
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A collection of projects I've built, from e-commerce platforms to developer tools. Each one taught me something new.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-6">
              Featured Projects
            </h2>
            <div className="grid gap-6">
              {featuredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 text-xs font-medium">
                            {project.category}
                          </span>
                          <span className="text-xs text-neutral-400 dark:text-neutral-500">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                          {project.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:opacity-90 transition-opacity"
                          >
                            <ExternalLinkIcon size={14} />
                            Visit Site
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          >
                            <GithubIcon size={14} />
                            Source
                          </a>
                        )}
                        {project.stats.stars > 0 && (
                          <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                            <StarIcon size={14} className="text-amber-500" fill="currentColor" />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Image/Visual */}
                    <div className="relative bg-gradient-to-br from-neutral-100 dark:from-neutral-800 to-neutral-200 dark:to-neutral-900 min-h-[250px] md:min-h-0">
                      {project.image ? (
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110 rotate-3' : ''}`}>
                            <FolderIcon size={40} className="text-violet-500/50" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-6">
              All Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="group p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FolderIcon size={18} className="text-violet-500" />
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinkIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs text-neutral-500 dark:text-neutral-400"
                        >
                          {tech}{project.tech.indexOf(tech) < 2 && " •"}
                        </span>
                      ))}
                    </div>
                    {project.stats.stars > 0 && (
                      <div className="flex items-center gap-1 text-xs text-neutral-400">
                        <StarIcon size={12} className="text-amber-500" fill="currentColor" />
                        <span>{project.stats.stars}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 p-8 md:p-12">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Interested in working together?
                </h2>
                <p className="text-violet-100 mb-6 max-w-xl">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <a 
                  href="mailto:can@yigit.dev"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-violet-600 font-medium hover:bg-violet-50 transition-colors"
                >
                  Get in touch
                  <ArrowRightIcon size={16} />
                </a>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
