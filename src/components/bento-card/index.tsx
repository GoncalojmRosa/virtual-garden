export function BentoCard({
  name,
  content,
}: Readonly<{ name: string; content: React.ReactNode }>) {
  return (
    <div className="h-full">
      <div className="flex items-center justify-center flex-col m-3">
        <h1 className="text-2xl font-medium">{name}</h1>
      </div>
      <div className="h-full p-4 overflow-y-auto border-slate-400/10 bg-neutral-100 rounded-xl border-2">
        {content}
      </div>
    </div>
  );
}
