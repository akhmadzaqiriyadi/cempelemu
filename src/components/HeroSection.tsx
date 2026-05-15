import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-satay.png"
          alt="Sate Kambing Muda Cempe Lemu sizzling on charcoal grill"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay with warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/20 border border-[#FFD700]/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
            <span className="text-[#FFD700] font-semibold text-xs tracking-widest uppercase">
              Spesialis Kambing Muda Khas Tegal
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-shadow-lg animate-fade-in-up animate-fade-in-up-delay-1">
            Spesialis{" "}
            <span className="text-[#FFD700]">Sate Kambing Muda</span>{" "}
            Khas Tegal
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl text-shadow-sm animate-fade-in-up animate-fade-in-up-delay-2">
            Daging kambing muda pilihan, lembut, juicy, dan otentik.
            Favorit para pejabat dan seniman.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animate-fade-in-up-delay-3">
            <a
              href="#menu"
              id="hero-cta-menu"
              className="bg-[#FFD700] text-[#1F2937] font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#e6c200] hover:shadow-xl transition-all duration-200 hover:-translate-y-1 text-sm sm:text-base"
            >
              🍢 Lihat Menu
            </a>
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20reservasi%20tempat"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-reservasi"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#1F2937] transition-all duration-200 hover:-translate-y-1 text-sm sm:text-base backdrop-blur-sm"
            >
              📅 Reservasi Tempat
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-6 animate-fade-in-up animate-fade-in-up-delay-3">
            {[
              { value: "3", label: "Cabang" },
              { value: "10+", label: "Tahun Berpengalaman" },
              { value: "1000+", label: "Pelanggan / Hari" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFD700]">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
