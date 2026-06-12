import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Photo = { src: string; label: string };

const realizacje: Photo[] = [
  { src: '/265706549_148387674190272_594449682884279227_n.webp', label: 'Szafka łazienkowa – fronty MDF kremowe lakierowane' },
  { src: '/271731961_157544649941241_4970346657924316472_n-2.webp', label: 'Kuchnia – fronty MDF antracyt mat' },
  { src: '/271804110_155520926810280_6462881131501313119_n.webp', label: 'Kuchnia klasyczna – fronty MDF szare półmat' },
  { src: '/271864420_155520916810281_676410144754141506_n.webp', label: 'Kuchnia z wyspą – fronty MDF lakierowane jasne' },
  { src: '/271876940_155923306770042_7555040148077404175_n.webp', label: 'Łazienka – fronty MDF szare mat' },
  { src: '/271951415_155923316770041_2659730646013506266_n.webp', label: 'Realizacja – fronty MDF lakierowane' },
  { src: '/272114439_157544653274574_7043124350667451828_n.webp', label: 'Realizacja – meble lakierowane na wymiar' },
  { src: '/279132925_176625988033107_2089930118699547137_n.webp', label: 'Realizacja – fronty meblowe na zamówienie' },
];

function Lightbox({ photos, startIndex, onClose }: { photos: Photo[]; startIndex: number; onClose: () => void }) {
  const [cur, setCur] = useState(startIndex);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCur(c => (c - 1 + photos.length) % photos.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCur(c => (c + 1) % photos.length); };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/95 flex items-center justify-center p-4" onClick={onClose}>
      <button onClick={prev} className="absolute left-4 md:left-8 text-white bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 p-3 rounded-full transition-colors z-10">
        <ChevronLeft size={22} />
      </button>
      <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <img src={photos[cur].src} alt={photos[cur].label} className="w-full max-h-[80vh] object-contain rounded-lg" />
        <p className="text-center text-zinc-300 mt-4 text-sm">{photos[cur].label}</p>
        <p className="text-center text-zinc-600 text-xs mt-1">{cur + 1} / {photos.length}</p>
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

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Realizacje</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Galeria naszych prac
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            Prawdziwe realizacje – kuchnie, łazienki i meble z frontami lakierowanymi przez Front-Lak Color Space.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {realizacje.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative overflow-hidden rounded-lg aspect-square focus:outline-none"
            >
              <img src={p.src} alt={p.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/55 transition-all duration-300 flex items-end">
                <div className="p-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-semibold text-left leading-snug">{p.label}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIdx !== null && (
        <Lightbox photos={realizacje} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}
    </section>
  );
}
