import FadeInSection from "@/components/ui/FadeInSection";

export default function StorySection() {
  return (
    <section id="historia" className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#eee7de] bg-white p-8 shadow-sm md:p-12">
        <FadeInSection>
          <p className="text-center text-sm uppercase tracking-[0.25em] text-[#a07f67]">
            Nossa história
          </p>

          <h2 className="mt-4 text-center font-serif text-3xl md:text-5xl text-[#2f2824]">
            O amor nos trouxe até aqui
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-center leading-8 text-[#6b615a]">
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
        </FadeInSection>
      </div>
    </section>
  );
}