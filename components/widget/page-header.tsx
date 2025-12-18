import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Portfolio", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function PageHeader() {
  return (
    <header className="py-4">
      <div className="max-w-[700px] mx-auto px-6">
        <nav className="flex items-center justify-between px-4 py-2.5 rounded-full bg-transparent">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/CYLogo.png"
              alt="Can Yigit"
              width={28}
              height={28}
              className="invert"
            />
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="px-3 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="mailto:info@canyigit.com"
            className="px-4 py-1.5 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
