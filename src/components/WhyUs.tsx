import { Wind, Gem, SlidersHorizontal, Briefcase, MapPin, FileText } from 'lucide-react';

const reasons = [
  {
    icon: Wind,
    title: 'Izolowana lakiernia – zero pyłu',
    desc: 'Nasz zakład wyposażony jest w szczelnie izolowaną komorę lakierniczą z kontrolowanym środowiskiem. Efekt: perfekcyjnie gładka powierzchnia.',
  },
  {
    icon: Gem,
    title: 'Najwyższa jakość wykończenia',
    desc: 'Używamy lakierów premium klasy meblowej. Każda powłoka jest równomierna, trwała i odporna na zarysowania oraz warunki kuchenne.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Precyzyjne dopasowanie kolorów',
    desc: 'Realizujemy każdy kolor z palet RAL, NCS oraz własnych próbek. Gwarantujemy zgodność z wzorcem na całej partii frontów.',
  },
  {
    icon: Briefcase,
    title: 'Doświadczenie branżowe',
    desc: 'Ponad 15 lat w branży lakiernictwa meblowego. Realizacje dla stolarni, firm wykonawczych i klientów indywidualnych z całego Mazowieckiego.',
  },
  {
    icon: MapPin,
    title: 'Lokalny partner – szybki kontakt',
    desc: 'Jesteśmy z Mazowieckiego – blisko Radomia. Szybka komunikacja, elastyczne terminy, odbiór i dostawa do uzgodnienia.',
  },
  {
    icon: FileText,
    title: 'Realizacje na wymiar',
    desc: 'Nie tylko lakierujemy – produkujemy fronty MDF na indywidualne wymiary. Jedno zamówienie, jeden dostawca.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Dlaczego my</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Powody, dla których<br />
              <span className="text-zinc-400">wybierają nas stolarnie i klienci</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Jesteśmy specjalistyczną lakiernią meblową, która stawia jakość i precyzję ponad wszystko. Poznaj powody, dla których zleceniodawcy wracają do nas od lat.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold px-7 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText size={18} />
              Zamów wycenę
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(r => (
              <div key={r.title} className="group flex gap-4 p-5 bg-zinc-900 border border-zinc-800 hover:border-amber-400/30 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center transition-colors">
                  <r.icon size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{r.title}</div>
                  <div className="text-zinc-500 text-xs leading-relaxed">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
