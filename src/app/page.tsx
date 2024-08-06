import { BentoGrid } from "@/components/bento-grid";

const features: Features[] = [
  {
    name: "",
    description: "",
    content: (
      <div className="grid auto-rows-[19vh] grid-cols-6 gap-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border border-dashed rounded-xl border-blue-400 p-4"
          >
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Feature 2",
    description: "This is the second feature",
    content: <div>World</div>,
  },
  {
    name: "Feature 3",
    description: "This is the third feature",
    content: <div>!</div>,
  },
  {
    name: "Feature 4",
    description: "This is the fourth feature",
    content: <div>Goodbye</div>,
  },
  {
    name: "Feature 5",
    description: "This is the fifth feature",
    content: <div>World</div>,
  },
];

export default function Home() {
  return (
    <main className="flex mx-auto min-h-screen justify-center flex-col px-24">
      <BentoGrid features={features} />
    </main>
  );
}
