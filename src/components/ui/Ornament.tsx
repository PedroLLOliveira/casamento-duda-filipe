type Props = {
  className?: string;
};

export default function Ornament({ className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-[#b4947c] ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-[#d7c8bb]" />
      <span className="text-lg">✦</span>
      <span className="h-px w-10 bg-[#d7c8bb]" />
    </div>
  );
}