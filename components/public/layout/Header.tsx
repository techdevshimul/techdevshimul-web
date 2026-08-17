"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const LinksOptions = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/education" },
  { name: "Blogs", href: "/blogs" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
  // { name: "Testimonials", href: "/testimonials" },
  // { name: "Workflows", href: "/workflows" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-charcoal/80 backdrop-blur-md border-b border-glass-border shadow-sm shadow-glow-electric/5">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image
            alt="techdevshimul"
            src="/assets/images/logo.png"
            width={40}
            height={40}
            priority
          />
          <span className="hidden sm:inline-block text-primary font-label-md text-label-md font-bold tracking-wide">
            techdevshimul
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-6 items-center">
          {LinksOptions.map((link) => (
            <li key={link.name}>
              <Link
                className={`text-primary font-bold font-label-md text-label-md ${
                  pathname === link.href ? "border-b-2 border-primary pb-1" : ""
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            className="hidden lg:block bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md font-bold transition-all duration-300 hover:scale-105 glow-hover"
            href="/contact"
          >
            Hire Me
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-primary focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-b border-glass-border px-margin-mobile py-6 transition-all duration-300">
          <ul className="flex flex-col gap-4 items-center">
            {LinksOptions.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-primary font-bold font-label-md text-label-md ${
                    pathname === link.href
                      ? "text-accent border-b-2 border-primary inline-block"
                      : ""
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="sm:hidden w-full bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md font-bold transition-all duration-300 glow-hover"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
