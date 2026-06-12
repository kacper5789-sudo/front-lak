import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Kamil Kapusta',
    role: 'Klient indywidualny',
    text: 'Polecam gorąco. Zamówiłem już czwarty komplet frontów i za każdym razem wszystko było jak najbardziej w porządku i szybciej niż się spodziewałem. POLECAM!',
    stars: 5,
    when: 'wczoraj',
    badge: 'NOWA',
    initial: 'K',
    color: 'bg-purple-500',
  },
  {
    name: 'Krzysiek Pl',
    role: 'Klient indywidualny',
    text: 'Bardzo dobra firma fronty pierwsza klasy właściciel bardzo dobry człowiek! Polecam serdecznie!',
    stars: 5,
    when: '6 lat temu',
    badge: null,
    initial: 'K',
    color: 'bg-red-500',
  },
  {
    name: 'Paweł Minda',
    role: 'Klient indywidualny',
    text: 'Polecam. Wysoka jakość frontów, terminy również ok.',
    stars: 5,
    when: '4 lata temu',
    badge: null,
    initial: 'P',
    color: 'bg-blue-500',
  },
  {
    name: 'Bananek XXX',
    role: 'Klient indywidualny',
    text: 'Dobra jakość! Serdecznie polecam!',
    stars: 5,
    when: '8 lat temu',
    badge: null,
    initial: 'B',
    color: 'bg-amber-500',
  },
  {
    name: 'Krzysiek Płokita',
    role: 'Klient indywidualny',
    text: 'Profesjonalna obsługa polecam.',
    stars: 5,
    when: '8 lat temu',
    badge: null,
    initial: 'K',
    color: 'bg-teal-500',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Opinie klientów</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Co mówią nasi klienci
          </h2>

          {/* Rating summary */}
          <a
            href="https://www.google.com/maps/place/Lakierowanie+MDF+Lakiernia+Meblowa/@51.2910514,21.1499492,16.18z/data=!4m8!3m7!1s0x47185d30e3729af9:0x5fc1068ce0391bf7!8m2!3d51.292465!4d21.152694!9m1!1b1!16s%2Fg%2F1tfbm19z?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 rounded-xl px-7 py-5 mt-4 transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <div className="flex items-end gap-2">
              <span className="text-5xl font-black text-white leading-none">4.7</span>
              <span className="text-zinc-500 text-sm mb-1">/ 5</span>
            </div>
            <div>
              <div className="flex gap-1 mb-1.5">
                {[1,2,3,4].map(s => (
                  <Star key={s} size={18} className="text-amber-400 fill-amber-400" />
                ))}
                <Star size={18} className="text-amber-400 fill-amber-400 opacity-70" />
              </div>
              <div className="text-zinc-300 text-sm font-medium">24 opinie</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-zinc-500 text-xs group-hover:text-amber-400 transition-colors">Zobacz wszystkie opinie →</span>
              </div>
            </div>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name + r.when} className="bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-colors duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {r.initial}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{r.name}</div>
                    <div className="text-zinc-500 text-xs flex items-center gap-1.5 mt-0.5">
                      <span>{r.when}</span>
                      {r.badge && (
                        <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {r.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">„{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
