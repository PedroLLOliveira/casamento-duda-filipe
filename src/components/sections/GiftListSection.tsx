"use client";

import { useMemo, useState } from "react";
import { giftCategories } from "@/data/gifts";
import GiftPixModal from "@/components/gifts/GiftPixModal";
import FadeInSection from "@/components/ui/FadeInSection";
import Ornament from "@/components/ui/Ornament";

type SelectedGift = {
  itemName: string;
  itemImage: string;
  categoryLabel: string;
  value: number;
  paymentLink: string;
};

export default function GiftListSection() {
  const [activeCategoryId, setActiveCategoryId] = useState(giftCategories[0].id);
  const [selectedGift, setSelectedGift] = useState<SelectedGift | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const activeCategory = useMemo(
    () => giftCategories.find((category) => category.id === activeCategoryId)!,
    [activeCategoryId]
  );

  function handleCloseModal() {
    setSelectedGift(null);
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  }

  return (
    <section id="presentes" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a07f67]">
              Lista de presentes
            </p>

            <Ornament className="mt-4" />

            <h2 className="mt-5 text-4xl font-serif md:text-5xl">
              Escolha uma faixa e veja os presentes
            </h2>

            <p className="mt-5 leading-8 text-[#6b615a]">
              Organizamos os presentes por faixa de valor para facilitar sua
              navegação. Selecione uma faixa abaixo e veja os itens disponíveis.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 border-b border-[#e7ddd3]">
          <div className="flex flex-wrap gap-6 md:gap-8">
            {giftCategories.map((category) => {
              const isActive = category.id === activeCategoryId;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`relative pb-4 text-sm font-medium transition ${isActive
                    ? "text-[#2f2824]"
                    : "text-[#8a7f77] hover:text-[#5e544d]"
                    }`}
                >
                  {category.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full transition ${isActive ? "bg-[#8c6f5a]" : "bg-transparent"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <FadeInSection key={activeCategory.id}>
          <div className="mt-8 rounded-[28px] bg-white/70 p-1">
            <div className="rounded-[26px] border border-[#eadfd5] bg-white p-8 shadow-sm">

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {activeCategory.items.map((item, index) => (
                  <FadeInSection key={item.id} delay={index * 0.04}>
                    <div className="group overflow-hidden rounded-[28px] border border-[#eee3d9] bg-white transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_rgba(80,60,40,0.08)]">
                      <div className="flex h-[220px] items-center justify-center overflow-hidden bg-[#f8f5f0]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#b0917b]">
                          Presente
                        </p>

                        <h4 className="mt-3 font-serif text-[28px] leading-tight text-[#2f2824]">
                          {item.name}
                        </h4>

                        <div className="mt-5 flex items-center gap-3">
                          <span className="h-px w-8 bg-[#dccfc3]" />
                          <p className="text-sm text-[#7a6f68]">
                            Faixa <span className="font-medium text-[#8c6f5a]">{activeCategory.label}</span>
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            setSelectedGift({
                              itemName: item.name,
                              itemImage: item.image,
                              categoryLabel: activeCategory.label,
                              value: activeCategory.value,
                              paymentLink: activeCategory.paymentLink,
                            })
                          }
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d8c8bb] px-5 py-3 text-sm text-[#5e534c] transition hover:border-[#8c6f5a] hover:bg-[#f8f1ea] hover:text-[#2f2824]"
                        >
                          Presentear
                          <span className="transition group-hover:translate-x-0.5">→</span>
                        </button>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      {selectedGift && (
        <GiftPixModal
          open={!!selectedGift}
          onClose={handleCloseModal}
          itemName={selectedGift.itemName}
          itemImage={selectedGift.itemImage}
          categoryLabel={selectedGift.categoryLabel}
          value={selectedGift.value}
          paymentLink={selectedGift.paymentLink}
        />
      )}

      {showThankYou && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#2f2824] px-6 py-3 text-sm text-white shadow-lg">
          Obrigado pelo carinho com os noivos ✨
        </div>
      )}
    </section>
  );
}