import { Clock } from "lucide-react";

const branches = [
  {
    id: "cabang-tegal",
    name: "Cabang Pusat Tegal",
    address: "Jl. Ahmad Yani no.84",
    note: "Sebelah utara Pasar Pagi Kota Tegal",
    badge: null,
    mapsUrl:
      "https://www.google.com/maps/search/Jl.+Ahmad+Yani+no.84+Tegal",
  },
  {
    id: "cabang-adiwerna",
    name: "Cabang Adiwerna",
    address: "Jl. Raya 1 Adiwerna-Banjaran",
    note: "Sebelah utara TOL Layang Banjaran",
    badge: null,
    mapsUrl:
      "https://www.google.com/maps/search/Jl.+Raya+1+Adiwerna+Banjaran+Tegal",
  },
  {
    id: "cabang-slawi",
    name: "Cabang Exit Tol Slawi",
    address: "Jl. Mayjend Sutoyo, Kagok-Slawi",
    note: "Depan BRI Kagok",
    badge: "Buka 09:00 – 02:30 WIB",
    mapsUrl:
      "https://www.google.com/maps/search/Jl.+Mayjend+Sutoyo+Kagok+Slawi",
  },
];

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-[#E30613] flex-shrink-0 mt-0.5"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.407 3.218-6.89C19.5 6.579 16.171 3 12 3c-4.17 0-7.5 3.579-7.5 7.432 0 2.483 1.274 4.811 3.218 6.89a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E30613] font-bold text-xs tracking-widest uppercase mb-3 bg-[#E30613]/10 px-3 py-1 rounded-full">
            Temukan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">
            Cabang{" "}
            <span className="text-[#E30613]">Cempe Lemu</span>
          </h2>
          <p className="mt-3 text-[#1F2937]/60 max-w-xl mx-auto text-sm sm:text-base">
            Kunjungi kami di lokasi terdekat Anda. Kami siap melayani dengan sepenuh hati.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <div
              key={branch.id}
              id={branch.id}
              className="relative bg-[#FFFBF0] rounded-2xl border border-[#FFD700]/30 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Number accent */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                <span className="text-[#1F2937] font-extrabold text-sm">0{i + 1}</span>
              </div>

              {/* Special badge */}
              {branch.badge && (
                <span className="inline-flex items-center gap-1.5 bg-[#E30613] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {branch.badge}
                </span>
              )}

              <div className="flex items-start gap-3 mb-4">
                <MapPinIcon />
                <div>
                  <h3 className="font-extrabold text-[#1F2937] text-lg leading-snug">
                    {branch.name}
                  </h3>
                  <p className="text-[#1F2937]/80 font-medium text-sm mt-1">
                    {branch.address}
                  </p>
                  <p className="text-[#1F2937]/50 text-xs mt-0.5">{branch.note}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[#FFD700]/20">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`maps-btn-${branch.id}`}
                  className="flex items-center justify-center gap-2 bg-[#1F2937] text-white font-bold text-sm py-3 px-5 rounded-xl hover:bg-[#E30613] transition-colors duration-200 w-full"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Buka di Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-10 text-center">
          <p className="text-[#1F2937]/50 text-sm">
            Jam operasional umum:{" "}
            <span className="font-semibold text-[#1F2937]">10:00 – 22:00 WIB</span>
            {" "}(kecuali cabang Slawi yang buka hingga 02:30)
          </p>
        </div>
      </div>
    </section>
  );
}
