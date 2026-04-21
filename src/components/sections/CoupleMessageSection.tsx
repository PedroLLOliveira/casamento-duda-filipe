import FadeInSection from "@/components/ui/FadeInSection";

export default function CoupleMessageSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[-120px] top-10 h-64 w-64 rounded-full bg-[#efe3d8] blur-3xl" />
        <div className="absolute right-[-80px] bottom-0 h-72 w-72 rounded-full bg-[#ead7c8] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeInSection>
          <p className="text-sm uppercase tracking-[0.28em] text-[#a07f67]">
            Com amor
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-[#2f2824]">
            Uma mensagem do casal
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#6b615a]">
            Este site foi criado com muito carinho para reunir um pedacinho da
            nossa história e compartilhar com você os detalhes desse dia tão
            sonhado. Mais do que qualquer presente, o que realmente torna essa
            celebração especial é poder vivê-la ao lado de pessoas queridas.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#6b615a]">
            Obrigado por fazer parte da nossa caminhada, pelo carinho de sempre
            e por estar presente, de alguma forma, neste momento tão importante
            para nós.
          </p>

          <p className="mt-8 font-serif text-2xl text-[#8c6f5a]">
            Com carinho, Duda & Filipe
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}