import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Lokalizacja</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Znajdź nas
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            Jesteśmy w Józefowie k. Kowali – 15 minut od centrum Radomia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-zinc-800 h-80 lg:h-full min-h-[320px]">
            <iframe
              title="Lokalizacja Front-Lak Color Space"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.0!2d21.149949!3d51.291051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185d30e3729af9%3A0x5fc1068ce0391bf7!2sLakierowanie%20MDF%20Lakiernia%20Meblowa!5e0!3m2!1spl!2spl!4v1717842000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) invert(5%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Dane adresowe</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Adres</div>
                    <div className="text-white font-semibold">Józefów 9a</div>
                    <div className="text-zinc-400 text-sm">26-624 Kowala</div>
                    <div className="text-zinc-400 text-sm">woj. mazowieckie</div>
                  </div>
                </div>
                <a href="tel:513676682" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                    <Phone size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Telefon</div>
                    <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">513 676 682</div>
                  </div>
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Lakierowanie+MDF+Lakiernia+Meblowa/@51.2910514,21.1499492,16.18z/data=!4m6!3m5!1s0x47185d30e3729af9:0x5fc1068ce0391bf7!8m2!3d51.292465!4d21.152694!16s%2Fg%2F1tfbm19z?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 text-zinc-300 hover:text-amber-400 font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <ExternalLink size={16} />
              Otwórz w Google Maps
            </a>

            <a
              href="https://www.google.com/maps/place/Lakierowanie+MDF+Lakiernia+Meblowa/@51.2910514,21.1499492,16.18z/data=!4m8!3m7!1s0x47185d30e3729af9:0x5fc1068ce0391bf7!8m2!3d51.292465!4d21.152694!9m1!1b1!16s%2Fg%2F1tfbm19z?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 text-zinc-300 hover:text-amber-400 font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Oceń nas na Google
            </a>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="text-zinc-400 text-xs uppercase tracking-wider mb-3">Obserwuj nas</div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/front.lak.radom" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-500/10 text-zinc-400 hover:text-blue-400 py-2.5 rounded-lg transition-all text-sm font-medium">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="https://www.instagram.com/lakierowanie.mdf/" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-pink-500/50 hover:bg-pink-500/10 text-zinc-400 hover:text-pink-400 py-2.5 rounded-lg transition-all text-sm font-medium">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
