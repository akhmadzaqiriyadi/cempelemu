"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as MapLibreMap } from "maplibre-gl";

type Branch = {
  id: string;
  name: string;
  lat: number;
  lng: number;
};

export default function BranchMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const branches: Branch[] = useMemo(
    () => [
      {
        id: "tegal",
        name: "Cempe Lemu (Tegal)",
        lat: -6.8671331,
        lng: 109.1237873,
      },
      {
        id: "slawi",
        name: "Cempe Lemu (Slawi)",
        lat: -6.9828655,
        lng: 109.1345192,
      },
      {
        id: "exit-tol",
        name: "Cempe Lemu (Exit Tol Tegal–Slawi)",
        lat: -6.9275732,
        lng: 109.1255142,
      },
    ],
    [],
  );

  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current) return;
      if (mapRef.current) return;

      if (!mapTilerKey) {
        setLoadError("MapTiler key belum di-set.");
        return;
      }

      try {
        const maplibregl = await import("maplibre-gl");

        if (cancelled) return;

        const map = new maplibregl.Map({
          container: containerRef.current,
          style: `https://api.maptiler.com/maps/streets/style.json?key=${mapTilerKey}`,
          center: [branches[0].lng, branches[0].lat],
          zoom: 11,
          cooperativeGestures: true,
        });

        mapRef.current = map;

        const bounds = new maplibregl.LngLatBounds();

        branches.forEach((b) => {
          bounds.extend([b.lng, b.lat]);

          const popup = new maplibregl.Popup({ offset: 20 }).setHTML(
            `<div style="color:#1F2937; font-weight:700; font-size:14px; line-height:1.2">${b.name}</div>`,
          );

          new maplibregl.Marker({ color: "#E30613" })
            .setLngLat([b.lng, b.lat])
            .setPopup(popup)
            .addTo(map);
        });

        map.once("load", () => {
          map.fitBounds(bounds, {
            padding: 60,
            duration: 0,
          });
        });
      } catch {
        if (cancelled) return;
        setLoadError("Gagal memuat peta.");
      }
    }

    init();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [branches, mapTilerKey]);

  if (loadError) {
    return (
      <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="text-white/70 text-sm">
          {loadError} Set env <span className="font-semibold">NEXT_PUBLIC_MAPTILER_KEY</span> di
          <span className="font-semibold"> .env.local</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="branch-map w-full rounded-2xl overflow-hidden border border-white/10">
      <div ref={containerRef} className="w-full h-[320px] sm:h-[380px]" />
    </div>
  );
}
