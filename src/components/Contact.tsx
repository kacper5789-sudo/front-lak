import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert([{
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
    }]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">Kontakt</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            Wyślij zapytanie lub zadzwoń. Odpowiemy najszybciej jak to możliwe i przygotujemy wycenę.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-7">
              <h3 className="text-white font-bold text-lg mb-6">Dane kontaktowe</h3>
              <div className="flex flex-col gap-5">
                <a href="tel:513676682" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Telefon</div>
                    <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">513 676 682</div>
                  </div>
                </a>
                <a href="mailto:lakierowanie.frontow.mdf@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 group-hover:bg-amber-400/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white font-semibold group-hover:text-amber-400 transition-colors text-sm break-all">
                      lakierowanie.frontow.mdf@gmail.com
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Adres</div>
                    <div className="text-white font-semibold">Józefów 9a</div>
                    <div className="text-zinc-400 text-sm">26-624 Kowala</div>
                    <div className="text-zinc-400 text-sm">woj. mazowieckie</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400/10 to-amber-400/5 border border-amber-400/20 rounded-xl p-7">
              <div className="text-amber-400 font-bold text-lg mb-2">Szybka wycena?</div>
              <p className="text-zinc-400 text-sm mb-4">Zadzwoń bezpośrednio – odpowiemy na wszystkie pytania i ustalimy szczegóły zlecenia.</p>
              <a
                href="tel:513676682"
                className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone size={16} />
                Zadzwoń teraz
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-7 md:p-10">
              <h3 className="text-white font-bold text-lg mb-7">Wyślij zapytanie</h3>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Zapytanie wysłane!</p>
                  <p className="text-zinc-400 text-sm">Skontaktujemy się z Tobą jak najszybciej.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-amber-400 hover:text-amber-300 text-sm underline">
                    Wyślij kolejne zapytanie
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">Imię i nazwisko *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-amber-400 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="500 000 000"
                        className="w-full bg-zinc-950 border border-zinc-700 focus:border-amber-400 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="adres@email.pl"
                      className="w-full bg-zinc-950 border border-zinc-700 focus:border-amber-400 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-2">Opis zlecenia *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Opisz czego potrzebujesz: rodzaj elementów, wymiary, wykończenie (mat / połysk), kolor..."
                      className="w-full bg-zinc-950 border border-zinc-700 focus:border-amber-400 rounded-lg px-4 py-3 text-white placeholder-zinc-600 outline-none transition-colors resize-none text-sm"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Wystąpił błąd. Spróbuj ponownie lub zadzwoń pod numer 513 676 682.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-zinc-950 font-bold py-4 rounded transition-all duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <><Loader size={18} className="animate-spin" /> Wysyłanie...</>
                    ) : (
                      <><Send size={18} /> Wyślij zapytanie</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
