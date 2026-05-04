import type { Column as ColumnType, ColumnId } from "../types";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";

interface ColumnProps {
  column: ColumnType;
  onMove: (taskId: string, from: ColumnId, to: ColumnId) => void;
  onDelete: (taskId: string, columnId: ColumnId) => void;
  onAdd: (columnId: ColumnId, title: string, description: string) => void;
  onDragStart: (e: React.DragEvent, taskId: string, columnId: ColumnId) => void;
  onDrop: (e: React.DragEvent, columnId: ColumnId) => void;
}

export default function Column({ column, onMove, onDelete, onAdd, onDragStart, onDrop }: ColumnProps) {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drag-over");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drag-over");
    onDrop(e, column.id);
  };

  return (
    <div
      className="column"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="column-header">
        <h2>{column.title}</h2>
        <span className="task-count">{column.tasks.length}</span>
      </div>
      <div className="task-list">
        {column.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            columnId={column.id}
            onMove={onMove}
            onDelete={onDelete}
            onDragStart={onDragStart}
          />
        ))}
      </div>
      <AddTaskForm columnId={column.id} onAdd={onAdd} />
    </div>
  );
}
