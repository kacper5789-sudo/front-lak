import { Phone } from 'lucide-react';

export default function StickyPhone() {
  return (
    <a
      href="tel:513676682"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-4 py-3.5 rounded-full shadow-2xl shadow-amber-400/30 transition-all duration-200 hover:scale-105 hover:shadow-amber-400/50"
      aria-label="Zadzwoń do nas"
    >
      <Phone size={20} className="animate-pulse" />
      <span className="text-sm hidden sm:block">Zadzwoń</span>
    </a>
  );
}
