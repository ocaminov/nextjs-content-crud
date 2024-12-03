import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 "
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex justify-between">
        <h1>{task.title}</h1>
        <button
        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm("are you sure?");
            if (accept) {
              deleteTask(task.id);
              toast.success("task deleted successfully");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p className="text-gray-300">{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div>
  );
}

export default TaskCard;
