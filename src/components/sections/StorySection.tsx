import FadeInSection from "@/components/ui/FadeInSection";

export default function StorySection() {
  return (
    <section id="historia" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-stretch">
        <FadeInSection>
          <div className="flex h-full rounded-[32px] border border-[#eee7de] bg-white p-8 shadow-sm md:p-12">
            <div className="my-auto">
              <p className="text-sm uppercase tracking-[0.25em] text-[#a07f67]">
                Nossa história
              </p>

              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-[#2f2824]">
                O amor nos trouxe até aqui
              </h2>

              <div className="mt-8 space-y-6 leading-8 text-[#6b615a]">
                <p>
                  Nossa história foi sendo construída aos poucos, em detalhes simples,
                  conversas sinceras, risadas compartilhadas e na alegria de descobrir
                  que juntos a vida ficava mais bonita.
                </p>

                <p>
                  Com o tempo, o carinho virou parceria, a parceria virou amor e o
                  amor virou a certeza de que queríamos caminhar lado a lado em todos
                  os próximos capítulos.
                </p>

                <p>
                  Hoje, com o coração cheio de gratidão, celebramos esse encontro e o
                  início de uma nova etapa. E é uma felicidade enorme poder dividir
                  esse momento com você.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="h-full overflow-hidden rounded-[32px] shadow-sm">
            <img
              src="/images/casal/history-section.jpeg"
              alt="Foto do casal na seção nossa história"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}