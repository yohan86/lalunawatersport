"use client"; // Required for useState and interactive mobile toggles in Next.js

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Imported from react-icons
import { prefix } from '@/utils/prefix';
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  // Nav links helper array to keep code clean and prevent repeating links
  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  const rightLinks = [
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="w-full h-[90px] md:h-[120px] bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl relative flex flex-row items-center justify-between md:justify-center h-full mx-auto px-4 md:px-0">
        
        {/* --- DESKTOP LEFT NAVIGATION --- */}
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 font-medium text-gray-700">
            {leftLinks.map((link) => {
              const leftActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return(
              <li key={link.href} className={`relative ${leftActive ? "text-site-green" : "hover:text-site-green transition-colors"}`}>
                <Link href={link.href}>{link.name}
                {leftActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-site-green rounded-full" />
                )}
                </Link>
              </li>
              )
          })}
          </ul>
        </nav>

        {/* --- LOGO (Centered on desktop, natural layout on mobile) --- */}
        <div className="logo relative w-[140px] h-[80px] md:w-[180px] md:h-[120px] md:mx-10">
          <Link href="/">
            <Image 
              src={`${prefix}/laluna-logo.png`} 
              alt="Logo" 
              fill 
              className="object-contain shrink-0" 
              loading="eager"
            />
          </Link>
        </div>

        {/* --- DESKTOP RIGHT NAVIGATION --- */}
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 font-medium text-gray-700">
            {rightLinks.map((link) => {
              const rightActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return(
                <li key={link.href} className={`relative ${rightActive ? "text-site-green": "hover:text-site-green transition-colors"} `}>
                  <Link href={link.href}>{link.name}
                  {rightActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-site-green rounded-full" />
                  )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button 
          onClick={toggleMenu} 
          className="block md:hidden text-gray-700 focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* --- MOBILE OVERLAY DRAWER MENU --- */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="w-full text-center">
            <ul className="flex flex-col gap-6 text-xl font-semibold text-gray-800">
              {allLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                    className="block py-2 w-full hover:text-site-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;