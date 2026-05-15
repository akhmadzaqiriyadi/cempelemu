import Image from "next/image";

const menuItems = [
  {
    id: "sate-kambing-muda",
    title: "Sate Kambing Muda",
    desc: "Sate kambing muda pilihan, dibakar sempurna dengan arang, disajikan dengan bumbu kacang khas Tegal yang gurih dan lontong hangat.",
    image: "/menu-sate.png",
    badge: "Best Seller",
  },
  {
    id: "gulai-kambing",
    title: "Gulai Kambing Bumbu Rempah",
    desc: "Gulai kambing dengan kuah santan kental berbumbu rempah nusantara pilihan, harum dan kaya rasa.",
    image: "/menu-gulai.png",
    badge: null,
  },
  {
    id: "tongseng-kambing",
    title: "Tongseng Kambing Khas Tegal",
    desc: "Tongseng kambing dengan kuah kecap manis berbumbu, perpaduan daging empuk dan sayuran segar khas Tegal.",
    image: "/menu-tongseng.png",
    badge: null,
  },
  {
    id: "sop-kambing",
    title: "Sop Kambing Bening",
    desc: "Sop kambing dengan kaldu bening segar, tulang dan daging empuk, disajikan hangat dengan taburan bawang goreng.",
    image: "/menu-sop.png",
    badge: null,
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-secondary font-bold text-xs tracking-widest uppercase mb-3 bg-secondary/10 px-3 py-1 rounded-full">
            Menu Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark">
            Sajian{" "}
            <span className="text-secondary">Signature</span> Kami
          </h2>
          <p className="mt-3 text-text-dark/60 max-w-xl mx-auto text-sm sm:text-base">
            Setiap hidangan diracik dengan cinta dan resep turun-temurun khas Tegal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              id={`menu-card-${item.id}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ⭐ {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-text-dark text-base leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-text-dark/60 text-xs leading-relaxed flex-1">
                  {item.desc}
                </p>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20pesan%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`pesan-btn-${item.id}`}
                  className="mt-4 w-full bg-primary text-text-dark font-bold text-sm py-2.5 rounded-xl text-center hover:bg-primary-dark transition-colors duration-200"
                >
                  Pesan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20melihat%20menu%20lengkap"
            target="_blank"
            rel="noopener noreferrer"
            id="menu-view-all"
            className="inline-flex items-center gap-2 border-2 border-primary text-text-dark font-bold px-8 py-3 rounded-full hover:bg-primary transition-colors duration-200 text-sm"
          >
            Lihat Menu Lengkap
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
