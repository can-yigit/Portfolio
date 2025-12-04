"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SearchIcon, GithubIcon } from "lucide-react";
import CommandPalette from "./CommandPalette";

const navItems = [
  { label: "Portfolio", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard shortcut ⌘K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo */}
          <div className="header-logo">
            <a href="/" className="logo-link">
              <img 
                src="/CYLogo.png" 
                alt="Can Yigit" 
                className="h-8 w-auto invert"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
                  >
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-500 hover:bg-neutral-200 transition-colors text-sm"
              aria-label="Open search"
            >
              <SearchIcon size={14} />
              <span className="hidden md:inline text-xs">Search...</span>
              <kbd className="hidden md:flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-[10px] font-mono text-neutral-500">
                <span>⌘</span>
                <span>K</span>
              </kbd>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/can-yigit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-600 hover:bg-neutral-200 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </header>

      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}
