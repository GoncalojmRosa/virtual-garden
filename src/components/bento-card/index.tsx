export function BentoCard({
  name,
  description,
  content,
}: Readonly<{ name: string; description: string; content: React.ReactNode }>) {
  return (
    <div className="rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4">
      <h1>{name}</h1>
      <p>{description}</p>
      {content}
    </div>
  );
}
