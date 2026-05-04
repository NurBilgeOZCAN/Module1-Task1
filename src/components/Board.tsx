import { useState } from "react";
import type { Column as ColumnType, ColumnId } from "../types";
import Column from "./Column";

const initialColumns: ColumnType[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "1", title: "Research project requirements", description: "Gather and document all project requirements from stakeholders." },
      { id: "2", title: "Set up development environment", description: "Install necessary tools and configure the workspace." },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "3", title: "Design UI mockups", description: "Create wireframes and high-fidelity mockups for the application." },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "4", title: "Project kickoff meeting", description: "Initial meeting with the team to align on goals." },
    ],
  },
];

let nextId = 5;

export default function Board() {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);

  const handleAddTask = (columnId: ColumnId, title: string, description: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, tasks: [...col.tasks, { id: String(nextId++), title, description }] }
          : col
      )
    );
  };

  const handleMoveTask = (taskId: string, from: ColumnId, to: ColumnId) => {
    setColumns((prev) => {
      const fromCol = prev.find((c) => c.id === from)!;
      const task = fromCol.tasks.find((t) => t.id === taskId)!;
      return prev.map((col) => {
        if (col.id === from) return { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) };
        if (col.id === to) return { ...col, tasks: [...col.tasks, task] };
        return col;
      });
    });
  };

  const handleDeleteTask = (taskId: string, columnId: ColumnId) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, tasks: col.tasks.filter((t) => t.id !== taskId) }
          : col
      )
    );
  };

  const handleDragStart = (e: React.DragEvent, taskId: string, columnId: ColumnId) => {
    e.dataTransfer.setData("taskId", taskId);
    e.dataTransfer.setData("fromColumn", columnId);
  };

  const handleDrop = (e: React.DragEvent, toColumn: ColumnId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    const fromColumn = e.dataTransfer.getData("fromColumn") as ColumnId;
    if (fromColumn !== toColumn) {
      handleMoveTask(taskId, fromColumn, toColumn);
    }
  };

  return (
    <div className="board">
      {columns.map((col) => (
        <Column
          key={col.id}
          column={col}
          onMove={handleMoveTask}
          onDelete={handleDeleteTask}
          onAdd={handleAddTask}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}
