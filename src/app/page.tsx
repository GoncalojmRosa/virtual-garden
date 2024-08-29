import { BentoGrid } from "@/components/bento-grid";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./../components/navbar/index";
import TaskList from "@/components/task/taskList";
import Garden from "@/components/garden";

const features: Features[] = [
  {
    name: "Garden",
    content: <Garden />,
  },
  {
    name: "Tasks",
    content: <TaskList />,
  },
  {
    name: "📋 Completed",
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
    content: (
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">80</h1>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <ClerkProvider>
      <main className="mx-auto min-h-screen px-24">
        <Navbar />
        <BentoGrid features={features} />
      </main>
    </ClerkProvider>
  );
}
