"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import PortfolioGrid from "./components/PortfolioGrid";
import Footer from "./components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const waveRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-greeting", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.9,
        ease: "power3.out",
      });


    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!waveRef.current) return;

    const tl = gsap.timeline();
    
    tl.to(waveRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
    })
    .to(waveRef.current, { rotation: 20, duration: 0.1, ease: "power1.inOut" })
    .to(waveRef.current, { rotation: -15, duration: 0.1, ease: "power1.inOut" })
    .to(waveRef.current, { rotation: 20, duration: 0.1, ease: "power1.inOut" })
    .to(waveRef.current, { rotation: -15, duration: 0.1, ease: "power1.inOut" })
    .to(waveRef.current, { rotation: 0, duration: 0.1, ease: "power1.inOut" })
    .to(waveRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <>
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-section relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            {/* Gradient orbs - green theme */}
            <div>
              <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 via-green-200/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-teal-200/30 via-emerald-200/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-100/20 via-transparent to-teal-100/20 rounded-full blur-3xl" />
            </div>
            {/* Subtle grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `linear-gradient(rgba(128,128,128,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>
          <div className="hero-container">
            <h1 className="hero-title">
              <div className="hero-intro">
                <span className="hero-greeting">Hey, I'm</span>
                <span 
                  className="hero-profile-wrapper"
                  onMouseEnter={handleMouseEnter}
                >
                  <img src="/profile.png" alt="Can Yigit" className="hero-profile" />
                  <span 
                    ref={waveRef} 
                    className="hero-wave"
                  >
                    👋🏼
                  </span>
                </span>
              </div>
              <div className="hero-name">Can Yigit</div>
              <div className="hero-role">Software Developer</div>
            </h1>

            <p className="hero-description">
              Specialized in building high-performance web applications and scalable systems.
              <br />
              Turning complex problems into elegant, user-focused solutions.
            </p>

            <div className="hero-buttons">
              <a href="/cv.pdf" download className="btn btn-secondary download-indicator">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </a>
              <a href="mailto:can.yigit@outlook.de" className="btn btn-primary contact-indicator">
                <span className="btn-text">Get in Touch</span>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
