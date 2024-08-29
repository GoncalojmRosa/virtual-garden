import { Package, PackageOpen } from "lucide-react";

interface TaskItemProps {
  id: number;
  title: string;
  handleComplete: (id: number) => void;
}

export function TaskItem({ id, title, handleComplete }: TaskItemProps) {
  return (
    <div
      key={id}
      className="h-[60px] border-b border-slate-400/10 relative group flex items-center justify-between"
    >
      <span>{title}</span>
      <div onClick={() => handleComplete(id)}>
        <Package className="text-slate-500 group-hover:hidden" />
        <PackageOpen className="text-slate-500 hidden group-hover:block group-hover:scale-125" />
      </div>
    </div>
  );
}
