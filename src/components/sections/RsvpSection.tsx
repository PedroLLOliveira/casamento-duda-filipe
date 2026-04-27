import RsvpForm from "@/components/rsvp/RsvpForm";
import FadeInSection from "@/components/ui/FadeInSection";

export default function RsvpSection() {
  return (
    <section id="presenca" className="px-6 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#eadfd5] bg-[#fcfaf7] shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="bg-[#efe6dc] px-8 py-12 md:px-12">
            <FadeInSection>
              <p className="text-sm uppercase tracking-[0.25em] text-[#8c6f5a]">
                Confirmação
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#2f2824]">
                Confirme sua presença
              </h2>

              <p className="mt-6 leading-8 text-[#6b615a]">
                Ficaremos muito felizes em ter você conosco nesse dia tão especial.
                Preencha o formulário ao lado para confirmar sua presença.
              </p>

              <div className="mt-10 space-y-6 text-[#5f5650]">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#a07f67]">
                    Data
                  </p>
                  <p className="mt-2 text-lg">20 de junho de 2026</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#a07f67]">
                    Horário
                  </p>
                  <p className="mt-2 text-lg">16h</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#a07f67]">
                    Local
                  </p>
                  <p className="mt-2 text-lg">Estrada Principal de Macuco • Boa Família, Muriaé/MG</p>
                  <p className="mt-2 text-lg">Rancho Demarque</p>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="px-8 py-12 md:px-12 bg-white">
            <FadeInSection delay={0.1}>
              <RsvpForm />
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}