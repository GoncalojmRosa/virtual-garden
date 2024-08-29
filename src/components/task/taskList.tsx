import { CirclePlus, Package, PackageOpen } from "lucide-react";
import { TaskItem } from "./taskItem";
import { useState } from "react";

export default function TaskList() {
  return (
    <div className="m-4">
      <div className="h-[60px] flex items-center justify-center gap-2 border-2 rounded cursor-pointer border-dashed border-spacing-10">
        <span>
          <CirclePlus />
        </span>
        New Task
      </div>
      {[...Array(10)].map((_, i) => (
        <TaskItem key={i} id={i} title={`Task ${i}`} />
      ))}
    </div>
  );
}
