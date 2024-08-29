"use client";

import { CirclePlus } from "lucide-react";
import { TaskItem } from "./taskItem";
import { useState } from "react";
import { default as Confetti } from "react-confetti";
import useWindowDimensions from "@/hooks/windowSize";

type Task = {
  id: number;
  title: string;
};

export default function TaskList() {
  const { width, height } = useWindowDimensions();
  const [isAdding, setIsAdding] = useState(false);
  const [taskCompleted, setTaskComplete] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 0, title: "Task 0" },
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
    { id: 6, title: "Task 6" },
    { id: 7, title: "Task 7" },
    { id: 8, title: "Task 8" },
    { id: 9, title: "Task 9" },
  ]);
  function handleAddTask() {
    setTasks([...tasks, { id: tasks.length, title: "Task " + tasks.length }]);
    setIsAdding(false);
  }
  function handleCompleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
    setTaskComplete(true);
  }

  if (!(width && height)) {
    return null;
  }

  return (
    <div className="m-4">
      {taskCompleted && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          onConfettiComplete={() => setTaskComplete(false)}
        />
      )}
      <div
        className="h-[60px] flex items-center justify-center gap-2 border-2 rounded cursor-pointer border-dashed border-spacing-10"
        onClick={() => setIsAdding(true)}
      >
        <span>
          <CirclePlus />
        </span>
        New Task
      </div>
      {isAdding && (
        <form onSubmit={handleAddTask} className="flex items-center mt-4 h-7">
          <input
            type="text"
            placeholder="New Task"
            className="bg-transparent flex-1 focus:outline-none"
          />
        </form>
      )}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          handleComplete={handleCompleteTask}
        />
      ))}
    </div>
  );
}
