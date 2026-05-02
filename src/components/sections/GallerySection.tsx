"use client";

import { useMemo, useState } from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { galleryImages } from "@/data/gallery";
import FadeInSection from "@/components/ui/FadeInSection";

const STEP = 10;

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(STEP);

  const selectedImage = useMemo(() => {
    if (selectedIndex === null) return null;
    return galleryImages[selectedIndex];
  }, [selectedIndex]);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  function handlePrev() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  }

  function handleNext() {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  }

  function handleLoadMore() {
    setVisibleCount((prev) => Math.min(prev + STEP, galleryImages.length));
  }

  const overlayButtonClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white/95 text-[#2f2824] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white";

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
          {visibleImages.map((image, index) => {
            const realIndex = galleryImages.findIndex((item) => item.id === image.id);

            return (
              <FadeInSection key={image.id} delay={(index % 6) * 0.04}>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(realIndex)}
                  className="group mb-5 block w-full overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:shadow-md"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              </FadeInSection>
            );
          })}
        </div>

        {hasMoreImages && (
          <FadeInSection>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center gap-3 rounded-full border border-[#d8c8bb] bg-white px-6 py-3 text-sm text-[#5e534c] transition hover:bg-[#f8f1ea] hover:text-[#2f2824]"
              >
                Ver mais fotos
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5ede6] text-[#8c6f5a]">
                  <FiChevronDown size={18} />
                </span>
              </button>
            </div>
          </FadeInSection>
        )}
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
              className={`absolute left-2 z-10 md:left-6 ${overlayButtonClass}`}
              aria-label="Imagem anterior"
            >
              <FiChevronLeft size={22} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[88vh] max-w-full rounded-3xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={handleNext}
              className={`absolute right-2 z-10 md:right-6 ${overlayButtonClass}`}
              aria-label="Próxima imagem"
            >
              <FiChevronRight size={22} />
            </button>

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className={`absolute right-4 top-4 z-10 ${overlayButtonClass}`}
              aria-label="Fechar galeria"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}