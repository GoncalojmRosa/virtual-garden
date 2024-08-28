import { BentoGrid } from "@/components/bento-grid";
import { Check, Package, PackageOpen, Trash2 } from "lucide-react";
import Navbar from "./../components/navbar/index";

const features: Features[] = [
  {
    name: "",
    description: "",
    content: (
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
            className="h-[60px] p-4 border-b border-slate-400/10 relative group flex items-center justify-between"
          >
            <span>Task {i + 1}</span>
            <div>
              <Package className="text-slate-500 group-hover:hidden" />
              <PackageOpen className="text-slate-500 hidden group-hover:block group-hover:scale-125" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "📋 Completed",
    description: "This is the third feature",
    content: (
      <div className="content-center space-y-3">
        <div className="flex items-center justify-center gap-x-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex items-center flex-col">
              <span> {i} </span>
              <div className="w-20 h-12 p-4 flex items-center justify-center"></div>
            </div>
          ))}
        </div>
        <div className="">
          <p className="text-center"> Agosto de 2024 </p>
        </div>
      </div>
    ),
  },
  {
    name: "🌱 Collected",
    description: "This is the fifth feature",
    content: (
      <div className="flex items-center justify-center h-2/3">
        <h1 className="text-5xl font-bold">80</h1>
      </div>
    ),
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
