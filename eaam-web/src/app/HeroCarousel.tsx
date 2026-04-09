"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const SLIDES = [
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/9f0162f421f8933a48685a467612f61c/IMG_2500.jpg",
    heading: "Becas",
    subtext: "Becas Para Estudiantes",
    btn: { label: "Leer más", href: "/contacto" },
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/f7e8688c5a32ec7c7634c32a38f39d75/IMG-20181201-WA0029.jpg",
    heading: "Estudia",
    subtext: "Desde cualquier parte del país",
    btn: { label: "Contáctate con nosotros", href: "/contacto" },
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/99b7ffbce84f89b00d7ebcf94400f89c/FOT_8411-scaled.jpg",
    heading: "Descuentos y beneficios",
    subtext: "En casas de montaña para nuestros estudiantes.",
    btn: { label: "Ver más", href: "/beneficios" },
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/b830859128325c658d5acb1e8d891431/20220814_105846.jpg",
    heading: "Nuestra aula es la montaña",
    subtext: "Formando profesionales con los estándares más altos",
    btn: null,
  },
];

const INTERVAL = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [bgKey, setBgKey] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setTextKey((k) => k + 1);
    setBgKey((k) => k + 1);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => {
          const next = (c + 1) % SLIDES.length;
          setTextKey((k) => k + 1);
          setBgKey((k) => k + 1);
          setProgressKey((k) => k + 1);
          return next;
        });
      }
    }, INTERVAL);
  }, []);

  const resetTimer = useCallback(() => {
    setProgressKey((k) => k + 1);
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full h-[580px] md:h-[700px] lg:h-[85vh] overflow-hidden bg-black"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Slide backgrounds */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <div
            key={i === current ? bgKey : i}
            className={`absolute inset-0 bg-cover bg-center ${i === current ? "animate-kenburns" : ""}`}
            style={{ backgroundImage: `url('${s.bg}')` }}
          />
          {/* Cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20 md:pb-28">

        {/* Slide indicators */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-white/40 text-xs font-mono tracking-widest tabular-nums">
            {String(current + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(SLIDES.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetTimer(); }}
                aria-label={`Slide ${i + 1}`}
                className="relative h-[2px] overflow-hidden rounded-full transition-all duration-500 bg-white/25"
                style={{ width: i === current ? 48 : 20 }}
              >
                {i === current && (
                  <span
                    key={progressKey}
                    className="absolute inset-y-0 left-0 bg-white animate-progress-bar"
                    style={{ animationDuration: `${INTERVAL}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Text with enter animation */}
        <div key={textKey} className="animate-slideup">
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-5 drop-shadow-2xl">
            {slide.heading}
          </h1>
          <p className="text-lg md:text-xl text-white/65 mb-8 max-w-lg font-light leading-relaxed">
            {slide.subtext}
          </p>
          {slide.btn && (
            <Link
              href={slide.btn.href}
              className="inline-flex items-center gap-2 bg-on-primary-container text-white px-7 py-3.5 rounded-lg font-[family-name:var(--font-headline)] font-bold text-base hover:brightness-110 transition-all shadow-2xl"
            >
              {slide.btn.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => { prev(); resetTimer(); }}
        aria-label="Slide anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 rounded-full bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 text-white transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => { next(); resetTimer(); }}
        aria-label="Siguiente slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 rounded-full bg-black/20 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 text-white transition-all duration-200"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}
