import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#o-firmie', label: 'O firmie' },
    { href: '#uslugi', label: 'Usługi' },
    { href: '#proces', label: 'Proces' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24 md:h-28">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/247942013_3014666388792074_8959218635652358588_n.webp"
            alt="Front-Lak Color Space – Producent Frontów Lakierowanych"
            className="h-20 md:h-24 w-auto object-contain"
            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-amber-400 transition-colors duration-200 uppercase tracking-wider font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.facebook.com/front.lak.radom" target="_blank" rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-400 transition-colors p-1.5" aria-label="Facebook">
            <FacebookIcon size={18} />
          </a>
          <a href="https://www.instagram.com/lakierowanie.mdf/" target="_blank" rel="noopener noreferrer"
            className="text-zinc-400 hover:text-pink-400 transition-colors p-1.5" aria-label="Instagram">
            <InstagramIcon size={18} />
          </a>
          <a href="tel:513676682" className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm px-4 py-2.5 rounded transition-all duration-200 ml-1">
            <Phone size={15} />
            513 676 682
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-800 text-sm uppercase tracking-wider">
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 py-2 border-b border-zinc-800">
            <a href="https://www.facebook.com/front.lak.radom" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors text-sm">
              <FacebookIcon size={16} /> Facebook
            </a>
            <a href="https://www.instagram.com/lakierowanie.mdf/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition-colors text-sm">
              <InstagramIcon size={16} /> Instagram
            </a>
          </div>
          <a href="tel:513676682" className="flex items-center justify-center gap-2 bg-amber-400 text-zinc-950 font-semibold py-3 rounded mt-1">
            <Phone size={16} />
            513 676 682
          </a>
        </div>
      )}
    </header>
  );
}
