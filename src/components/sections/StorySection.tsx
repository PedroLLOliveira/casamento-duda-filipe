import FadeInSection from "@/components/ui/FadeInSection";

export default function StorySection() {
  return (
    <section id="historia" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-stretch">
        <FadeInSection>
          <div className="flex h-full rounded-[32px] border border-[#eee7de] bg-white p-8 shadow-sm md:p-12">
            <div className="my-auto">
              <p className="text-sm uppercase tracking-[0.25em] text-[#a07f67]">
                Mensagem dos Noivos
              </p>

              <h2 className="mt-4 font-serif text-3xl md:text-5xl text-[#2f2824]">
                O amor nos encontrou
              </h2>

              <div className="mt-8 space-y-6 leading-8 text-[#6b615a]">
                <p>
                  Deus é perfeito. Crescemos ouvindo e conhecendo essa verdade, mas a forma 
                  como nos encontramos a colocou em evidência em nossas vidas.
                </p>

                <p>
                  Nossas famílias já se conheciam há anos. Estiveram juntas em tantos momentos e 
                  eventos, mas ainda guardavam duas pessoas da mesma idade — tão diferentes e, 
                  ao mesmo tempo, tão parecidas — que viviam em segredo uma para a outra.
                </p>

                <p>
                  Durante muito tempo, não nos conhecemos nem nos encontramos. Conforme fomos crescendo, 
                  aprendendo, mudando e nos tornando pessoas melhores, mal sabíamos que estávamos sendo 
                  preparados um para o outro.
                </p>

                <p>
                  Quando o momento certo chegou e nos encontramos, à medida que nos conhecíamos, absolutamente 
                  tudo foi fazendo sentido e se encaixando. Hoje, dois anos depois, podemos dizer juntos que Deus 
                  é perfeito e caminha conosco. Por isso, convidamos você para presenciar a maravilha dEle em 
                  nossas vidas através da celebração do nosso casamento.
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