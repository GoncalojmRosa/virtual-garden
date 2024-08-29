export default function Garden() {
  return (
    <div className="grid h-full grid-cols-6 gap-2">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="border border-dashed rounded-xl border-blue-400 p-4 relative flex items-center justify-center"
        >
          <span className="text-5xl">🌱</span>
          <span className="absolute top-0 right-0 text-xl">💧</span>
        </div>
      ))}
    </div>
  );
}
