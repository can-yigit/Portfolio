"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCarousel from "./ProjectCarousel";
import { Project } from "@/lib/api";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsPageClientProps {
  projects: Project[];
}

export default function ProjectsPageClient({ projects }: ProjectsPageClientProps) {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(section1Ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      gsap.from(section2Ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      gsap.from(section3Ref.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      gsap.from(projectsRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main className="main-content bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <section className="min-h-screen flex items-center justify-center py-32">
            <div ref={section1Ref} className="text-center">
              <span className="text-sm font-medium text-neutral-400 tracking-wide uppercase mb-4 block">
                Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                My Most Recent Work
              </h1>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center py-32">
            <div ref={section2Ref} className="text-center max-w-3xl">
              <p className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 leading-relaxed font-light">
                A collection of what I've actually built
              </p>
            </div>
          </section>

          <section className="min-h-screen flex items-center justify-center py-32">
            <div ref={section3Ref} className="text-center max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 leading-relaxed">
                From open-source libraries like React Zero-UI to production apps
              </p>
            </div>
          </section>

          <section className="py-24">
            <div ref={projectsRef}>
              <ProjectCarousel data={projects} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
