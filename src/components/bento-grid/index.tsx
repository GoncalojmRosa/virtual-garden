import { BentoCard } from "./../bento-card/index";

export function BentoGrid({
  features,
}: Readonly<{
  features: { name: string; description: string; content: React.ReactNode }[];
}>) {
  return (
    <div className="flex h-[90vh] justify-center flex-col">
      <div className="grid auto-rows-[192px] grid-cols-4 gap-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 border-slate-400/10 bg-neutral-100 ${
              i === 0
                ? "col-span-3 row-span-2"
                : i === 1
                ? "col-span-1 row-span-3"
                : i === 2
                ? "col-span-2"
                : ""
            }`}
          >
            <BentoCard key={i} {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
