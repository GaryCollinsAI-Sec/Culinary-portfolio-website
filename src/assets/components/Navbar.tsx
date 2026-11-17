
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#303030] bg-[#111111] text-[#F2F0ED]">
      <nav className="flex min-h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="font-[Impact,'Arial_Narrow',sans-serif] text-2xl font-black tracking-tight text-white sm:text-3xl">
            Gary Collins
          </span>

          <span className="hidden border-l border-[#444444] pl-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A7A7A7] sm:block">
            Culinary Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap font-mono text-base font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                link.label === "Home"
                  ? "text-[#FF4B0B]"
                  : "text-[#B8B8B8] hover:text-[#FF4B0B]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Availability */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <span className="h-2 w-2 rounded-full bg-[#FF4B0B]" />
          <span className="font-mono text-sm uppercase tracking-[0.15em] text-[#E5E5E5]">
            Open to Work
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="min-h-11 border border-[#444444] px-5 py-2 font-mono text-sm uppercase tracking-widest text-white transition hover:border-[#FF4B0B] hover:text-[#FF4B0B] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close ×" : "Menu +"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#303030] bg-[#151515] px-6 py-7 md:hidden"
        >
          <div className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-base font-semibold uppercase tracking-[0.18em] transition-colors ${
                  link.label === "Home"
                    ? "text-[#FF4B0B]"
                    : "text-[#B8B8B8] hover:text-[#FF4B0B]"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 border-t border-[#333333] pt-6">
              <span className="h-2 w-2 rounded-full bg-[#FF4B0B]" />
              <span className="font-mono text-sm uppercase tracking-[0.18em] text-white">
                Open to Work
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
