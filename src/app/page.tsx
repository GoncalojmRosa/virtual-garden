import { BentoGrid } from "@/components/bento-grid";
import Navbar from "./../components/navbar/index";
import { Check, PackageOpen, Trash2 } from "lucide-react";

const features: Features[] = [
  {
    name: "",
    description: "",
    content: (
      <div className="grid h-full grid-cols-6 gap-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border border-dashed rounded-xl border-blue-400 p-4 flex items-center justify-center"
          >
            <span className="text-5xl">🌱</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Tasks",
    description: "Complete tasks to earn rewards",
    content: (
      <div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 border-b border-slate-400/10 group"
          >
            <span>Task {i + 1}</span>
            <PackageOpen className="text-slate-500" />
            <div className="absolute invisible group-hover:visible">
              <div className="flex items-center">
                <Check className="text-green-500" />
                <Trash2 className="text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "📋 Completed",
    description: "This is the third feature",
    content: <div>!</div>,
  },
  {
    name: "Feature 4",
    description: "This is the fourth feature",
    content: <div>Goodbye</div>,
  },
  {
    name: "🌱 Collected",
    description: "This is the fifth feature",
    content: <div>World</div>,
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen px-24">
      <Navbar />
      <BentoGrid features={features} />
    </main>
  );
}
