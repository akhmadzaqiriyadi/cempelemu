"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const heroSlides = [
  {
    src: "/hero/IMG_1501.jpg",
    alt: "Sate kambing muda di atas bara api",
  },
  {
    src: "/hero/IMG_1502.jpg",
    alt: "Tampilan hidangan sate kambing muda siap saji",
  },
  {
    src: "/hero/IMG_1504.jpg",
    alt: "Suasana penyajian sate kambing muda khas Tegal",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    slideRefs.current.forEach((slideElement, index) => {
      if (!slideElement) {
        return;
      }

      gsap.to(slideElement, {
        autoAlpha: index === activeSlide ? 1 : 0,
        scale: index === activeSlide ? 1 : 1.06,
        duration: 1.1,
        ease: "power3.out",
        overwrite: true,
      });
    });
  }, [activeSlide]);

  const stats = [
    { value: 3, label: "Cabang", suffix: "" },
    { value: 10, label: "Tahun Berpengalaman", suffix: "+" },
    { value: 1000, label: "Pelanggan / Hari", suffix: "+" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(227,6,19,0.22),transparent_32%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <div className="inline-flex items-center gap-2 border border-primary/50 backdrop-blur-sm rounded-xl px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="text-primary font-semibold text-xs tracking-widest uppercase">
              Spesialis Kambing Muda Khas Tegal
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-shadow-lg animate-fade-in-up animate-fade-in-up-delay-1">
            Spesialis{" "}
            <span className="text-primary">Sate Kambing Muda</span>{" "}
            Khas Tegal
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl text-shadow-sm animate-fade-in-up animate-fade-in-up-delay-2 lg:mx-auto">
            Daging kambing muda pilihan, lembut, juicy, dan otentik.
            Favorit para pejabat dan seniman.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 animate-fade-in-up animate-fade-in-up-delay-3 lg:flex lg:justify-center">
            <a
              href="#menu"
              id="hero-cta-menu"
              className="inline-flex w-full items-center justify-center gap-1.5 bg-primary text-text-dark font-bold px-3 py-2 rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-200 hover:-translate-y-1 text-[11px] sm:text-base lg:w-auto lg:text-sm"
            >
              Lihat Menu
              <ArrowRight className="w-3 h-3 lg:w-3 lg:h-3" />
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20reservasi%20tempat"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-reservasi"
              className="inline-flex w-full items-center justify-center gap-1.5 border-2 border-white text-white font-bold px-3 py-2 rounded-xl hover:bg-white hover:text-text-dark transition-all duration-200 hover:-translate-y-1 text-[11px] sm:text-base backdrop-blur-sm lg:w-auto lg:text-sm"
            >
              <CalendarDays className="w-3 h-3 lg:w-3 lg:h-3" />
              Reservasi Tempat
            </a>
          </div>

          <div className="mt-12 mx-auto grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-6 animate-fade-in-up animate-fade-in-up-delay-3">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/60" />
      </div>
    </section>
  );
}

function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterValue = useRef({ value: 0 });

  useEffect(() => {
    const animation = gsap.to(counterValue.current, {
      value,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.round(counterValue.current.value));
      },
    });

    return () => {
      animation.kill();
    };
  }, [value]);

  return (
    <div className="text-center px-1 sm:px-0">
      <div className="text-xl sm:text-3xl font-extrabold text-primary leading-none">
        {displayValue.toLocaleString("id-ID")}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs text-white/70 mt-1 leading-tight">
        {label}
      </div>
    </div>
  );
}
