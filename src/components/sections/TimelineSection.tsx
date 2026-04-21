import { timelineEvents } from "@/data/timeline";
import FadeInSection from "@/components/ui/FadeInSection";

export default function TimelineSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <FadeInSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a07f67]">
              Nossa trajetória
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-[#2f2824]">
              A linha do tempo do nosso amor
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6b615a]">
              Alguns marcos que fizeram nossa história florescer até este momento.
            </p>
          </div>
        </FadeInSection>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 h-full w-px bg-[#d9cec4] md:left-1/2" />

          <div className="space-y-10">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <FadeInSection key={event.id} delay={index * 0.08}>
                  <div
                    className={`relative flex md:items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                  >
                    <div className="absolute left-4 top-6 h-3 w-3 rounded-full bg-[#8c6f5a] md:left-1/2 md:-translate-x-1/2" />

                    <div
                      className={`ml-12 w-full rounded-3xl border border-[#eee7de] bg-white p-6 shadow-sm md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-8" : "md:ml-8"
                        }`}
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-[#a07f67]">
                        {event.year}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl text-[#2f2824]">
                        {event.title}
                      </h3>
                      <p className="mt-4 leading-8 text-[#6b615a]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}