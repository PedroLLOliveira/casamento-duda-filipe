import Countdown from "@/components/ui/Countdown";
import FadeInSection from "@/components/ui/FadeInSection";
import Ornament from "@/components/ui/Ornament";

export default function HeroSection() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/casal/hero-banner.jpeg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#2d2622]/80" />

      <div className="pointer-events-none absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-[#ead9ca]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-[#d8bfa8]/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-16 pt-32 text-center text-white">
        <FadeInSection y={40}>
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.5em] md:text-sm">
              Nosso casamento
            </p>

            <Ornament className="mb-6" />

            <h1 className="font-serif text-6xl leading-none md:text-8xl">
              Duda & Filipe
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 md:text-xl">
              Depois de tantos momentos compartilhados, chegou o dia de celebrar
              o amor que nos trouxe até aqui e iniciar, com alegria, um novo
              capítulo da nossa história.
            </p>

            <div className="mt-10 space-y-2 text-sm md:text-lg">
              <p><strong>20 de junho de 2026</strong></p>
              <p>16h • Muriaé - MG</p>
            </div>

            <div className="mt-10">
              <Countdown targetDate="2026-06-26T16:00:00-03:00" />
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#presenca"
                className="rounded-full bg-[#8c6f5a] px-8 py-3.5 text-white shadow-lg shadow-black/15 transition hover:opacity-90"
              >
                Confirmar presença
              </a>

              <a
                href="#presentes"
                className="rounded-full border border-white/70 px-8 py-3.5 transition hover:bg-white hover:text-[#3c342f]"
              >
                Lista de presentes
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}