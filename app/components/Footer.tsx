"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { GithubIcon, LinkedinIcon, MailIcon, HeartIcon } from "lucide-react";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/can-yigit", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/canyigit", label: "LinkedIn" },
  { icon: MailIcon, href: "mailto:can@yigit.dev", label: "Email" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Big text animation
      gsap.from(bigTextRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: bigTextRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.from(".footer-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Big Text Section - Only top half visible, fades into footer */}
      <section className="relative overflow-hidden h-[200px] md:h-[280px]">
        <div ref={bigTextRef} className="absolute inset-x-0 top-0">
          <h2 
            className="text-[20vw] md:text-[16vw] font-bold text-neutral-200/80 leading-none tracking-tighter select-none text-center"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Can Yigit
          </h2>
        </div>
        {/* Gradient fade to footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
      </section>

      <footer ref={footerRef} className="border-t border-neutral-200 -mt-1 relative z-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Top Section */}
          <div className="footer-content grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="/" className="inline-block">
                <img 
                  src="/CYLogo.png" 
                  alt="Can Yigit" 
                  className="h-8 w-auto invert"
                />
              </a>
              <p className="text-neutral-500 text-sm max-w-xs">
                Turning ideas into elegant digital experiences. Based in Bremen, available worldwide.
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-link w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-all"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-neutral-200 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              © {new Date().getFullYear()} Can Yigit
            </p>
            <p className="flex items-center gap-1.5">
              Crafted with <HeartIcon size={14} className="text-rose-500" fill="currentColor" /> in Bremen
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
