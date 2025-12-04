import Image from "next/image";
import { WordRotate } from "@/components/ui/word-rotate";
import Spotify from "@/components/widget/spotify";
import LocalTime from "@/components/widget/local-time";
import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Image 
            src="/profile.png" 
            alt="Can Yigit" 
            width={120} 
            height={120} 
            className={styles.profileImage}
          />
          <div className={styles.heroInfo}>
            <span className={styles.classNames}>text-3xl font-bold tracking-tight</span>
            <div className={styles.nameRow}>
              <span className={styles.name}>Can Yigit</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4.5 text-blue-400 select-none" aria-label="Verified"><path fill="currentColor" d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"></path></svg>
            </div>
            <WordRotate 
              words={[
                "Software Developer",
                "Creating with code",
                "Clean code enthusiast"
              ]} 
              className={styles.tagline}
              duration={3000}
            />
            <div className={styles.spotifyWrapper}>
              <Spotify />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <div className={`${styles.infoItem} ${styles.infoItemWide}`}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span>Full Stack Developer & UI Designer</span>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>Bremen, Germany</span>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <LocalTime />
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>info@canyigit.com</span>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span>canyigit.com</span>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIconWrapper}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span>he/him</span>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className={styles.linksSection}>
          <div className={styles.linksGrid}>
            <a href="https://github.com/canyigit" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>GitHub</span>
                <span className={styles.linkHandle}>canyigit</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/canyigit" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>LinkedIn</span>
                <span className={styles.linkHandle}>canyigit</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="https://twitter.com/canyigit" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>X (Twitter)</span>
                <span className={styles.linkHandle}>@canyigit</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="mailto:info@canyigit.com" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>Email</span>
                <span className={styles.linkHandle}>info@canyigit.com</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="/projects" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>Portfolio</span>
                <span className={styles.linkHandle}>View Projects</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="/blog" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>Blog</span>
                <span className={styles.linkHandle}>Read Articles</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.aboutContent}>
            <p>
              Design Engineer with 5+ years of experience, known for pixel-perfect execution and 
              smooth interactions. I specialize in building modern web applications with React, 
              Next.js, and TypeScript.
            </p>
            <p>
              Currently focused on creating beautiful, performant user interfaces and 
              contributing to open source projects. I believe in clean code, attention to detail, 
              and continuous learning.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          {/* Row 1 - Left */}
          <div className={styles.testimonialsRow}>
            <div className={styles.testimonialsSlide}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className={styles.testimonialCards}>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Great work on the portfolio, really clean design!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=1" alt="John Doe" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>John Doe</span>
                        <span className={styles.testimonialRole}>CEO @TechCorp</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Amazing developer, delivered beyond expectations!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=2" alt="Jane Smith" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Jane Smith</span>
                        <span className={styles.testimonialRole}>CTO @StartupXYZ</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Incredible attention to detail, highly recommend!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=3" alt="Mike Johnson" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Mike Johnson</span>
                        <span className={styles.testimonialRole}>Designer @Agency</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>One of the best developers I&apos;ve worked with!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=4" alt="Sarah Williams" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Sarah Williams</span>
                        <span className={styles.testimonialRole}>PM @BigTech</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 - Right */}
          <div className={`${styles.testimonialsRow} ${styles.testimonialsRowReverse}`}>
            <div className={styles.testimonialsSlideReverse}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className={styles.testimonialCards}>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Professional and efficient, great communication!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=5" alt="Alex Chen" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Alex Chen</span>
                        <span className={styles.testimonialRole}>Founder @Startup</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Love the components, especially the animations!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=6" alt="Emma Brown" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Emma Brown</span>
                        <span className={styles.testimonialRole}>Designer @Studio</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Clean code and pixel-perfect execution!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=7" alt="David Lee" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>David Lee</span>
                        <span className={styles.testimonialRole}>Tech Lead @Corp</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Highly skilled, would definitely work with again!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://i.pravatar.cc/100?img=8" alt="Lisa Wang" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Lisa Wang</span>
                        <span className={styles.testimonialRole}>CEO @Agency</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className={styles.stackSection}>
          <h2 className={styles.sectionTitle}>Stack</h2>
          <div className={styles.stackGrid}>
            <div className={styles.stackItem} title="TypeScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
            </div>
            <div className={styles.stackItem} title="JavaScript">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
            <div className={styles.stackItem} title="React">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            </div>
            <div className={styles.stackItem} title="Next.js">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
            </div>
            <div className={styles.stackItem} title="Node.js">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            </div>
            <div className={styles.stackItem} title="Tailwind CSS">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
            </div>
            <div className={styles.stackItem} title="PostgreSQL">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
            </div>
            <div className={styles.stackItem} title="MongoDB">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            </div>
            <div className={styles.stackItem} title="Docker">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
            </div>
            <div className={styles.stackItem} title="Git">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
            </div>
            <div className={styles.stackItem} title="Figma">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
            </div>
            <div className={styles.stackItem} title="Python">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}