import Image from "next/image";
import { Beef, Crown, Flame, Smartphone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/about/2021-05-31.webp"
                alt="Suasana restoran Cempe Lemu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#FFD700] rounded-2xl shadow-xl px-5 py-4 text-center">
              <div className="text-3xl font-extrabold text-[#1F2937] leading-none">10+</div>
              <div className="text-xs font-semibold text-[#1F2937]/70 mt-1">Tahun Melayani</div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E30613]/10 rounded-full -z-10" />
          </div>

          {/* Right: Text */}
          <div>
            <span className="inline-block text-[#E30613] font-bold text-xs tracking-widest uppercase mb-3 bg-[#E30613]/10 px-3 py-1 rounded-full">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] leading-tight mb-6">
              Cita Rasa Otentik{" "}
              <span className="text-[#E30613]">Khas Tegal</span>,<br />
              Sejak Dulu Hingga Kini
            </h2>
            <p className="text-[#1F2937]/70 text-base leading-relaxed mb-8">
              <strong className="text-[#1F2937]">SATE KAMBING MUDA CEMPE LEMU</strong> adalah
              restoran yang mengkhususkan diri dalam sate kambing muda ala Tegal, dengan
              menggunakan daging kambing muda yang dipilih dengan teliti sehingga lembut dan
              juicy. Restoran ini populer di kalangan pejabat dan seniman serta menyediakan
              layanan pemesanan online. Dengan komitmen untuk menyajikan hidangan berkualitas
              tinggi, kami mengutamakan rasa dan kualitas daging yang kami sajikan. Mari nikmati
              sajian sate kambing muda yang lezat di atmosfer yang nyaman dan bersantaplah
              dengan gaya ala Tegal yang otentik.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { Icon: Flame, title: "Dibakar dengan Arang", desc: "Teknik tradisional untuk cita rasa terbaik" },
                { Icon: Beef, title: "Kambing Muda Pilihan", desc: "Dipilih teliti agar lembut & juicy" },
                { Icon: Crown, title: "Favorit Pejabat", desc: "Dipercaya kalangan pejabat & seniman" },
                { Icon: Smartphone, title: "Pesan Online", desc: "Mudah dipesan melalui WhatsApp" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-[#FFFBF0] rounded-xl p-4 border border-[#FFD700]/20"
                >
                  <span className="mt-0.5 text-[#E30613]">
                    <item.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-bold text-sm text-[#1F2937]">{item.title}</div>
                    <div className="text-xs text-[#1F2937]/60 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
