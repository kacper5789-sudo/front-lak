import { Phone, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background – real realization photo */}
      <div className="absolute inset-0">
        <img
          src="/271864420_155520916810281_676410144754141506_n.webp"
          alt="Fronty MDF lakierowane – realizacja Front-Lak Color Space"
          className="w-full h-full object-cover object-center"
        />
        {/* Light overlay left → transparent right, so dark text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4 text-zinc-900 tracking-tight">
            FRONT-LAK<br />COLOR SPACE
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-zinc-700 mb-6 tracking-wide">
            Lakierowanie MDF i frontów meblowych
          </p>

          <p className="text-base text-zinc-700 leading-relaxed mb-10 max-w-xl font-medium">
            Precyzyjne lakierowanie natryskowe w macie, półmacie i wysokim połysku.
            Jakość dla stolarni i klientów indywidualnych z całego Mazowieckiego.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-7 py-4 rounded transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              <FileText size={18} />
              Zamów wycenę
            </a>
            <a
              href="tel:513676682"
              className="flex items-center gap-2 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold px-7 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              513 676 682
            </a>
          </div>

          <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-zinc-300">
            {[
              { value: '15+', label: 'Lat doświadczenia' },
              { value: '5000+', label: 'Zrealizowanych zleceń' },
              { value: '100%', label: 'Izolowana lakiernia' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-black text-zinc-900">{stat.value}</div>
                <div className="text-sm text-zinc-600 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-500 text-xs uppercase tracking-widest">Przewiń</span>
        <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}
