import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import EventInfoSection from "@/components/sections/EventInfoSection";
import CoupleMessageSection from "@/components/sections/CoupleMessageSection";
import StorySection from "@/components/sections/StorySection";
// import GallerySection from "@/components/sections/GallerySection";
import GiftListSection from "@/components/sections/GiftListSection";
import RsvpSection from "@/components/sections/RsvpSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#2f2824]">
      <Navbar />
      <HeroSection />
      <EventInfoSection />
      <SectionDivider />
      <CoupleMessageSection />
      <SectionDivider />
      <StorySection />
      <SectionDivider />
      {/* <GallerySection /> */}
      {/* <SectionDivider /> */}
      <GiftListSection />
      <RsvpSection />

      <footer className="border-t border-[#e7ddd3] px-6 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-[#a07f67]">
          Com amor
        </p>

        <h3 className="mt-4 font-serif text-4xl text-[#2f2824]">
          Duda & Filipe
        </h3>

        <p className="mt-4 text-[#6b615a]">
          20 de Junho de 2026 • Muriaé - MG
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6b615a]">
          Obrigado por estar conosco nesse momento tão especial!
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-[#b4947c]">
          <span className="h-px w-10 bg-[#d7c8bb]" />
          <span>✦</span>
          <span className="h-px w-10 bg-[#d7c8bb]" />
        </div>
      </footer>
    </main>
  );
}