"use client";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileOverlayRef = useRef<HTMLDivElement | null>(null);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);
  const mobileTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const overlay = mobileOverlayRef.current;
    const panel = mobilePanelRef.current;
    if (!overlay || !panel) return;

    gsap.set(overlay, {
      display: "none",
      opacity: 0,
      pointerEvents: "none",
    });
    gsap.set(panel, {
      display: "none",
      opacity: 0,
      y: -10,
    });

    const tl = gsap
      .timeline({ paused: true })
      .set(overlay, { display: "block", pointerEvents: "auto" }, 0)
      .set(panel, { display: "flex" }, 0)
      .to(overlay, { opacity: 1, duration: 0.18, ease: "power2.out" }, 0)
      .to(
        panel,
        { opacity: 1, y: 0, duration: 0.26, ease: "power3.out" },
        0
      );

    tl.eventCallback("onReverseComplete", () => {
      gsap.set(overlay, { display: "none", pointerEvents: "none", opacity: 0 });
      gsap.set(panel, { display: "none", opacity: 0, y: -10 });
    });

    mobileTlRef.current = tl;
    return () => {
      tl.kill();
      mobileTlRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = mobileTlRef.current;
    if (!tl) return;

    if (menuOpen) {
      tl.play(0);
    } else {
      tl.reverse();
    }
  }, [menuOpen]);

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
            width={42}
            height={56}
            priority
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
            style={{ height: "auto" }}
          />
          {/* Text beside logo */}
          <div className="flex flex-col leading-tight">
            <span className={`text-[12px] font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-text-dark/70" : "text-white/80"
            }`}>
              Sate Kambing muda
            </span>
            <span className={`text-[20px] font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-text-dark" : "text-white"
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
              className={`font-semibold text-sm transition-colors hover:text-secondary ${
                scrolled ? "text-text-dark" : "text-white"
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
            className="bg-primary text-text-dark font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:bg-primary-dark hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
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
          aria-expanded={menuOpen}
          aria-controls="navbar-mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-text-dark" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 mb-1.5 transition-all ${
              scrolled ? "bg-text-dark" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? "bg-text-dark" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          ref={mobileOverlayRef}
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          id="navbar-mobile-menu"
          ref={mobilePanelRef}
          className="absolute left-0 right-0 top-full z-50 bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-text-dark hover:text-secondary transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20pesan%20sate%20kambing%20muda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-text-dark font-bold text-sm px-5 py-3 rounded-full text-center shadow-md"
            onClick={() => setMenuOpen(false)}
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </header>
  );
}
