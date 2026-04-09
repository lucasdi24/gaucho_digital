"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const SLIDES = [
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/9f0162f421f8933a48685a467612f61c/IMG_2500.jpg",
    heading: "Becas",
    subtext: "Becas Para Estudiantes",
    btn: { label: "Leer más", href: "/contacto" },
    overlay: "rgba(0,0,0,0.40)",
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/f7e8688c5a32ec7c7634c32a38f39d75/IMG-20181201-WA0029.jpg",
    heading: "Estudia",
    subtext: "Desde cualquier parte del país",
    btn: { label: "Contáctate con nosotros", href: "/contacto" },
    overlay: "rgba(0,0,0,0.20)",
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/99b7ffbce84f89b00d7ebcf94400f89c/FOT_8411-scaled.jpg",
    heading: "Descuentos y beneficios",
    subtext: "En casas de montaña para nuestros estudiantes.",
    btn: { label: "Ver más", href: "/beneficios" },
    overlay: "rgba(0,0,0,0.40)",
  },
  {
    bg: "https://eeaam.gaucho.digital/wp-content/uploads/slider/cache/b830859128325c658d5acb1e8d891431/20220814_105846.jpg",
    heading: "Nuestra aula es la montaña",
    subtext: "Formando profesionales con los estándares más altos",
    btn: null,
    overlay: "rgba(0,0,0,0.40)",
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const resetTimer = () => startTimer();

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      onMouseLeave={resetTimer}
    >
      {/* Background images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.bg}')`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: s.overlay }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 h-full flex items-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-4 drop-shadow-lg">
            {slide.heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed drop-shadow">
            {slide.subtext}
          </p>
          {slide.btn && (
            <Link
              href={slide.btn.href}
              className="inline-block bg-on-primary-container text-white px-8 py-4 rounded-lg font-[family-name:var(--font-headline)] font-bold text-lg hover:brightness-110 transition-all shadow-xl"
            >
              {slide.btn.label}
            </Link>
          )}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => { prev(); resetTimer(); }}
        aria-label="Slide anterior"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M11.433 15.992L22.69 5.712c.393-.39.393-1.03 0-1.42-.393-.39-1.03-.39-1.423 0L9.287 15.232c-.21.21-.3.49-.285.76-.015.28.075.56.284.77l11.98 10.94c.393.39 1.03.39 1.424 0 .393-.4.393-1.03 0-1.42L11.433 15.992z" fill="white" opacity="0.9" fillRule="evenodd"/>
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => { next(); resetTimer(); }}
        aria-label="Siguiente slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <path d="M10.722 4.293c-.394-.39-1.032-.39-1.427 0-.393.39-.393 1.03 0 1.42l11.283 10.28-11.283 10.29c-.393.39-.393 1.02 0 1.42.395.39 1.033.39 1.427 0l12.007-10.94c.21-.21.3-.49.284-.77.014-.27-.076-.55-.286-.76L10.72 4.293z" fill="white" opacity="0.9" fillRule="evenodd"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer(); }}
            aria-label={`Ir al slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
