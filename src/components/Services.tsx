import { useState } from 'react';
import { Sparkles, Droplets, Palette, Ruler, Layers, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Lakierowanie MDF – wysoki połysk',
    desc: 'Idealne wykończenie lustrzane o intensywnym połysku. Odporność na zarysowania i wilgoć. Idealne do kuchni i łazienek premium.',
    tag: 'Bestseller',
  },
  {
    icon: Droplets,
    title: 'Lakierowanie MDF – mat i półmat',
    desc: 'Eleganckie, matowe i półmatowe powierzchnie. Stonowany wygląd, odporność na odciski palców. Nowoczesny styl dla każdego wnętrza.',
    tag: null,
  },
  {
    icon: Layers,
    title: 'Lakierowanie frontów meblowych',
    desc: 'Kompleksowe lakierowanie frontów kuchennych, szafek, garderób. Wszystkie kształty i formaty. Jednolity kolor na całej powierzchni.',
    tag: null,
  },
  {
    icon: Palette,
    title: 'Indywidualne kolory i wykończenia',
    desc: 'Mieszamy kolory według palet RAL, NCS lub własnych próbek. Pełna personalizacja – każdy odcień, każde wykończenie.',
    tag: null,
  },
  {
    icon: Ruler,
    title: 'Fronty meblowe na wymiar',
    desc: 'Produkcja frontów MDF na indywidualne wymiary. Frezowania, rowki, profile – dopasowane do Twojego projektu.',
    tag: 'Nowość',
  },
  {
    icon: Sparkles,
    title: 'Efekty specjalne lakierowania',
    desc: 'Struktury, efekty beton, antyrefleks, soft-touch i inne wykończenia dekoracyjne dla wymagających projektów.',
    tag: null,
  },
];

type Photo = { src: string; label: string };

const frontyMDF: Photo[] = [
  { src: '/Front-2.webp', label: 'FRONT 2 – ramka płaska' },
  { src: '/FRONT3.webp', label: 'FRONT 3 – ramka klasyczna' },
  { src: '/Front-3.webp', label: 'FRONT 3 – wariant B' },
  { src: '/FRONT4.webp', label: 'FRONT 4 – profil dekoracyjny' },
  { src: '/FRONT5.webp', label: 'FRONT 5 – profil podwójny' },
  { src: '/FRONT6.webp', label: 'FRONT 6 – ramka szeroka' },
  { src: '/FRONT7.webp', label: 'FRONT 7 – gładki z wgłębieniem' },
  { src: '/FRONT8.webp', label: 'FRONT 8 – potrójne frezowanie' },
];

function FrontLightbox({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const [cur, setCur] = useState(startIndex);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCur(c => (c - 1 + frontyMDF.length) % frontyMDF.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCur(c => (c + 1) % frontyMDF.length); };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/95 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={prev} className="absolute left-4 md:left-8 text-white bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 p-3 rounded-full transition-colors z-10">
        <ChevronLeft size={22} />
      </button>
      <div className="relative max-w-sm w-full" onClick={e => e.stopPropagation()}>
        <img src={frontyMDF[cur].src} alt={frontyMDF[cur].label} className="w-full max-h-[80vh] object-contain rounded-lg bg-zinc-100" />
        <p className="text-center text-zinc-300 mt-4 text-sm font-semibold">{frontyMDF[cur].label}</p>
        <p className="text-center text-zinc-600 text-xs mt-1">{cur + 1} / {frontyMDF.length}</p>
      </div>
      <button onClick={next} className="absolute right-4 md:right-8 text-white bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 p-3 rounded-full transition-colors z-10">
        <ChevronRight size={22} />
      </button>
      <button onClick={onClose} className="absolute top-4 right-4 text-white bg-zinc-800 hover:bg-red-500 p-2 rounded-full transition-colors z-10">
        <X size={20} />
      </button>
    </div>
  );
}

export default function Services() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="uslugi" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Nasze usługi</span>
          <span className="h-px w-8 bg-amber-400" />
        </div>

        {/* Fronty MDF – wzory */}
        <div className="mb-16">
          <div className="text-center mb-7">
            <h3 className="text-white font-black text-2xl md:text-3xl mb-2">Wzory frontów MDF</h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              Produkujemy fronty MDF w różnych wzorach frezowań – poniżej wzory bazowe dostępne w każdym kolorze i wykończeniu.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {frontyMDF.map((p, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] focus:outline-none border border-zinc-800 hover:border-amber-400/50 transition-colors"
              >
                <img src={p.src} alt={p.label} className="w-full h-full object-cover bg-zinc-200 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/60 transition-all duration-300 flex items-end">
                  <div className="p-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                    <p className="text-white text-[10px] font-bold text-center leading-snug">{p.label}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Services heading + grid */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Kompleksowe lakierowanie MDF<br />
            <span className="text-zinc-400">i frontów meblowych</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Oferujemy pełen zakres usług lakierniczych dla stolarni, firm meblowych i klientów indywidualnych z Mazowieckiego.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="group relative bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-400/5"
            >
              {s.tag && (
                <span className="absolute top-5 right-5 text-xs font-semibold bg-amber-400 text-zinc-950 px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-5 group-hover:bg-amber-400/20 transition-colors duration-300">
                <s.icon size={22} className="text-amber-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-amber-400 transition-colors duration-200">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-5 pt-5 border-t border-zinc-800">
                <a href="#kontakt" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">
                  Zapytaj o cenę →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-amber-400/20"
          >
            <FileText size={18} />
            Zamów wycenę
          </a>
        </div>
      </div>

      {lightboxIdx !== null && (
        <FrontLightbox startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </section>
  );
}
