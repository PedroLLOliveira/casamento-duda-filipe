export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center px-6 py-4">
      <div className="flex w-full max-w-md items-center gap-4">
        <div className="h-px flex-1 bg-[#d8cec4]" />
        <div className="text-[#b0917b] text-xl">✦</div>
        <div className="h-px flex-1 bg-[#d8cec4]" />
      </div>
    </div>
  );
}