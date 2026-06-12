import { Shield, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Shield, title: 'Izolowana lakiernia', desc: 'Kontrolowane środowisko eliminuje pył i zapewnia idealną powierzchnię.' },
    { icon: Award, title: 'Wysoka jakość', desc: 'Profesjonalne lakiery i precyzyjny natrysk gwarantują trwałość i estetykę.' },
    { icon: Users, title: 'Dla stolarni i klientów', desc: 'Obsługujemy zarówno zakłady stolarskie, jak i klientów indywidualnych.' },
    { icon: Zap, title: 'Szybka realizacja', desc: 'Elastyczne terminy dostosowane do Twoich potrzeb i harmonogramu.' },
  ];

  return (
    <section id="o-firmie" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">O firmie</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Profesjonalna lakiernia<br />
              <span className="text-zinc-400">z Mazowieckiego</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Front-Lak Color Space to wyspecjalizowana lakiernia meblowa z siedzibą w Józefowie k. Kowali, obsługująca klientów z całego regionu Mazowieckiego, w tym z Radomia i okolic.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-5">
              Specjalizujemy się w lakierowaniu MDF metodą natryskową – mat, półmat i wysoki połysk. Nasz nowoczesny zakład wyposażony jest w izolowaną lakiernię, która gwarantuje idealnie gładką, jednolitą powierzchnię wolną od pyłu i niedoskonałości.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Realizujemy zlecenia dla stolarni, firm meblowych oraz klientów indywidualnych. Oferujemy pełną gamę kolorów i wykończeń, w tym efekty specjalne.
            </p>
          </div>

          {/* Image + highlights */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                alt="Lakiernia meblowa P.P.H.U LAK"
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-400 text-zinc-950 font-black text-lg px-6 py-4 rounded-lg shadow-xl">
                Radom & Mazowieckie
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map(h => (
                <div key={h.title} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                  <h.icon size={20} className="text-amber-400 mb-2" />
                  <div className="text-white font-semibold text-sm mb-1">{h.title}</div>
                  <div className="text-zinc-500 text-xs leading-relaxed">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
