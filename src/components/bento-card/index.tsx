export function BentoCard({
  name,
  description,
  content,
}: Readonly<{ name: string; description: string; content: React.ReactNode }>) {
  return (
    <div className="p-4 h-full overflow-y-auto">
      <div className="flex items-center justify-center flex-col">
        <h1>{name}</h1>
        <span>{description}</span>
      </div>

      {content}
    </div>
  );
}
