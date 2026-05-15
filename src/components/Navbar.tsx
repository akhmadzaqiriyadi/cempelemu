"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Tentang", href: "#tentang" },
    { label: "Menu", href: "#menu" },
    { label: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "py-3" : "py-4 md:py-5"
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none">
          <Image
            src="/logocempelemu.webp"
            alt="Logo Cempe Lemu"
            width={160}
            height={56}
            priority
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
          />
          {/* Text beside logo */}
          <div className="flex flex-col leading-tight">
            <span className={`text-[12px] font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[#1F2937]/70" : "text-white/80"
            }`}>
              Sate Kambing muda
            </span>
            <span className={`text-[20px] font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#1F2937]" : "text-white"
            }`}>
              Cempe Lemu
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-semibold text-sm transition-colors hover:text-[#E30613] ${
                scrolled ? "text-[#1F2937]" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20pesan%20sate%20kambing%20muda"
            target="_blank"
            rel="noopener noreferrer"
            id="navbar-cta"
            className="bg-[#FFD700] text-[#1F2937] font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-[#e6c200] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Hamburger */}
        <button
          id="navbar-hamburger"
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-[#1F2937]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-[#1F2937]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-[#1F2937]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[#1F2937] hover:text-[#E30613] transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20pesan%20sate%20kambing%20muda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#1F2937] font-bold text-sm px-5 py-3 rounded-full text-center shadow-md"
          >
            Pesan Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}
