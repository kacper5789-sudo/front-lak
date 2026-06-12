import { ClipboardCheck, Wind, Paintbrush, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    num: '01',
    title: 'Przygotowanie powierzchni',
    desc: 'Dokładne szlifowanie i odtłuszczanie płyt MDF. Wyrównanie powierzchni i aplikacja podkładu. Każdy detal sprawdzony przed lakierowaniem.',
  },
  {
    icon: Wind,
    num: '02',
    title: 'Lakiernia izolowana',
    desc: 'Proces odbywa się w szczelnie izolowanej komorze lakierniczej. Kontrolowana temperatura i wilgotność. Zero pyłu – idealna czystość powietrza.',
  },
  {
    icon: Paintbrush,
    num: '03',
    title: 'Natrysk lakieru',
    desc: 'Precyzyjny natrysk lakierów wysokiej jakości metodą HVLP. Równomierne warstwy, pełne krycie, perfekcyjna gładkość bez smug i zacieków.',
  },
  {
    icon: CheckCircle,
    num: '04',
    title: 'Kontrola jakości',
    desc: 'Każdy element przechodzi rygorystyczną kontrolę wizualną. Sprawdzamy jednolitość koloru, grubość powłoki i jakość wykończenia.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Jak pracujemy</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Nasz proces lakierowania
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Każde zlecenie realizujemy według sprawdzonego procesu, który gwarantuje idealną jakość bez kompromisów.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 w-20 h-20 rounded-full border-2 border-amber-400/30 group-hover:border-amber-400 bg-zinc-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-amber-400/10">
                <step.icon size={28} className="text-amber-400" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-xs font-black text-amber-400/30 group-hover:text-amber-400/60 transition-colors text-[10px] tracking-widest">
                {step.num}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-amber-400/5 border border-amber-400/20 rounded-xl p-8 text-center">
          <p className="text-white font-semibold text-lg mb-1">
            Gwarantujemy idealnie gładką powierzchnię wolną od pyłu
          </p>
          <p className="text-zinc-400 text-sm">
            Izolowana lakiernia to nasza przewaga – Twoje fronty meblowe wychodzą perfekcyjne, gotowe do montażu.
          </p>
        </div>
      </div>
    </section>
  );
}
