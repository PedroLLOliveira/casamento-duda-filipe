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
            Caros amigos e familiares,
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-[#2f2824]">
            Obrigado!
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#6b615a]">
            Obrigado por fazer parte! Você que hoje recebe esse convite, o faz porque, de alguma forma, 
            tem um lugar especial em nossas vidas. Seja por laços de sangue, por laços de amizade ou por laços de fé, 
            você é importante para nós e queremos celebrar esse momento ao seu lado.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#6b615a]">
            Nesse site, você encontrará as informações que precisa para chegar ao local da cerimônia, a data e o horário, 
            também poderá confirmar a sua presença, e nos presentear conforme sentir em seu coração.
          </p>

          <p className="mt-8 font-serif text-2xl text-[#8c6f5a]">
            Com carinho, Duda & Filipe
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}