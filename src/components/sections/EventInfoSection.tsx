export default function EventInfoSection() {
  return (
    <section id="evento" className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-[#eee7de] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8c6f5a]">
            Informações do evento
          </p>

          <h2 className="mt-4 font-serif text-3xl">Reserve essa data</h2>

          <div className="mt-6 space-y-5 leading-7 text-[#5f5650]">
            <p>
              <strong>Data:</strong><br />
              20 de junho de 2026
            </p>

            <p>
              <strong>Horário:</strong><br />
              16h
            </p>

            <p>
              <strong>Local:</strong><br />
              Rancho Demarque
            </p>

            <p>
              <strong>Endereço:</strong><br />
              Estrada Principal de Macuco • Boa Família, Muriaé/MG
            </p>
          </div>

          <p className="mt-8 leading-7 text-[#5f5650]">
            Queremos viver esse dia com leveza, alegria e muito amor. Sua presença
            será parte essencial dessa memória.
          </p>

          <a
            href="https://www.google.com/maps/search/Rancho+Demarque/@-21.1387314,-42.4884006,1477m/data=!3m1!1e3!4m15!1m8!3m7!1s0xbccc3ee72a7635:0x91a72de1e7199818!2sEstr.+Principal+de+Macuco,+80+-+Boa+Família,+Muriaé+-+MG,+36880-001!3b1!8m2!3d-21.1400979!4d-42.4893209!16s%2Fg%2F11l_68qh9l!3m5!1s0xbccd006d16e3eb:0xbfa2bd5f3f260fb2!8m2!3d-21.1387239!4d-42.4884016!16s%2Fg%2F11wv3l1rz5!5m1!1e2?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-[#8c6f5a] px-6 py-3 text-white transition hover:opacity-90"
          >
            Abrir localização
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#eee7de] bg-white shadow-sm">
          <iframe
            title="Mapa do evento"
            src="https://www.google.com/maps?q=Rancho+Demarque,+Muria%C3%A9,+MG&z=16&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}