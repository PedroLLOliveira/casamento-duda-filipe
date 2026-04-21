"use client";

import { useMemo, useState } from "react";
import { galleryImages } from "@/data/gallery";
import FadeInSection from "@/components/ui/FadeInSection";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = useMemo(() => {
    if (selectedIndex === null) return null;
    return galleryImages[selectedIndex];
  }, [selectedIndex]);

  function handlePrev() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  }

  function handleNext() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  }

  return (
    <section id="galeria" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <FadeInSection>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a07f67]">
              Galeria
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl text-[#2f2824]">
              Memórias que nos trouxeram até aqui
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6b615a]">
              Alguns registros da nossa caminhada, guardados com carinho e cheios
              de significado.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <FadeInSection key={image.id} delay={(index % 6) * 0.04}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-5 block w-full overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </FadeInSection>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 z-10 rounded-full bg-white/90 px-4 py-3 text-[#2f2824] shadow md:left-6"
            >
              ←
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[88vh] max-w-full rounded-3xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 z-10 rounded-full bg-white/90 px-4 py-3 text-[#2f2824] shadow md:right-6"
            >
              →
            </button>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm text-[#2f2824] shadow"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}