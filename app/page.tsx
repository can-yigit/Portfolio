import Image from "next/image";
import { WordRotate } from "@/components/ui/word-rotate";
import { Badge } from "@/components/ui/badge";
import Spotify from "@/components/widget/spotify";
import LocalTime from "@/components/widget/local-time";
import { getTechStack } from "@/lib/api";
import styles from "./page.module.scss";

export default async function HomePage() {
  const techStack = await getTechStack();
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
            <div className={styles.nameRow}>
              <span className={styles.name}>Can Yigit</span>
              <div className={styles.badgeContainer}>
                <Badge type="verified" />
                <Badge type="twitter" />
                <Badge type="discord" />
              </div>
            </div>
            <WordRotate 
              words={[
                "IT Specialist in Training",
                "Full-Stack Developer",
                "Shopware Enthusiast"
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
            <a href="https://github.com/can-yigit" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              <div className={styles.linkIconWrapper}>
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className={styles.linkContent}>
                <span className={styles.linkTitle}>GitHub</span>
                <span className={styles.linkHandle}>can-yigit</span>
              </div>
              <svg className={styles.linkArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/can-yigit-35b258383" target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
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

            <div className={styles.linkCardSplit}>
              <a href="/projects" className={styles.linkCardHalf}>
                <div className={styles.linkIconWrapperSmall}>
                  <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkTitle}>Portfolio</span>
                </div>
              </a>
              <div className={styles.linkCardDivider}></div>
              <a href="/blog" className={styles.linkCardHalf}>
                <div className={styles.linkIconWrapperSmall}>
                  <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkTitle}>Blog</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>About</h2>
          <div className={styles.aboutContent}>
            <p>
              IT Specialist for Application Development in training, passionate about building 
              modern web applications with React, Next.js, and TypeScript. Currently completing 
              my apprenticeship at HEPTACOM, where I work on E-Commerce solutions and Shopware systems.
            </p>
            <p>
              I focus on creating clean, scalable code and continuously expanding my knowledge in 
              Full-Stack development. I believe in clean code, attention to detail, and the 
              importance of continuous learning in the ever-evolving tech landscape.
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
                    <p className={styles.testimonialText}>Das Design sieht richtig professionell aus!</p>
                    <div className={styles.testimonialAuthor}>
                      <Image src="https://avatars.githubusercontent.com/u/159561025?v=4" alt="Anonymous" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Software Engineer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Das Design sieht richtig clean aus!</p>
                    <div className={styles.testimonialAuthor}>
                    <Image src="https://cdn.discordapp.com/avatars/274315305537503232/d90729f6ed8369c8097659fe7373cc0f.png" alt="Anonymous" width={32} height={32} className={styles.testimonialAvatar} />
                      <div>
                        <span className={styles.testimonialName}>Manu</span>
                        <span className={styles.testimonialRole}>Software Engineer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>You really helped me with that project, thanks!</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Team Member</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Your code quality is really strong for an apprentice.</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Mentor</span>
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
                    <p className={styles.testimonialText}>You learn quickly and implement things right away.</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Great collaboration, would work together again!</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Project Partner</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>You ask when you don&apos;t understand something, I really appreciate that.</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Senior Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.testimonialCard}>
                    <p className={styles.testimonialText}>Your initiative is really impressive.</p>
                    <div className={styles.testimonialAuthor}>
                      <div>
                        <span className={styles.testimonialName}>Anonymous</span>
                        <span className={styles.testimonialRole}>Team Lead</span>
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
            {techStack.length > 0 ? (
              techStack.map((tech) => (
                <div key={tech.id} className={styles.stackItem} title={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))
            ) : (
              <>
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
              </>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <span className={styles.timelineTitle}>IT Specialist for Application Development (Apprenticeship)</span>
                  <span className={styles.timelineDate}>08/2023 - 01/2026</span>
                </div>
                <span className={styles.timelineCompany}>HEPTACOM | Experts in Shopware</span>
                <p className={styles.timelineDescription}>
                  Apprenticeship as IT Specialist for Application Development with focus on Full-Stack development and Shopware. 
                  Contributing to E-Commerce solutions and interfaces for Shopware systems. 
                  Implementing individual customer requirements into scalable software solutions. 
                  Analysis, conception and documentation of software projects.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Contact CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let&apos;s work together</h2>
            <p className={styles.ctaDescription}>
              Have a project in mind? I&apos;m always open to discussing new opportunities 
              and creative ideas.
            </p>
            <div className={styles.ctaButtons}>
              <a href="mailto:info@canyigit.com" className={styles.ctaButtonPrimary}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in touch
              </a>
              <a href="/projects" className={styles.ctaButtonSecondary}>
                View my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}