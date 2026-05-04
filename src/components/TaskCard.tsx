import { useState } from "react";
import type { Task, ColumnId } from "../types";

interface TaskCardProps {
  task: Task;
  columnId: ColumnId;
  onMove: (taskId: string, from: ColumnId, to: ColumnId) => void;
  onDelete: (taskId: string, columnId: ColumnId) => void;
  onDragStart: (e: React.DragEvent, taskId: string, columnId: ColumnId) => void;
}

const COLUMN_ORDER: ColumnId[] = ["todo", "in-progress", "done"];

export default function TaskCard({ task, columnId, onMove, onDelete, onDragStart }: TaskCardProps) {
  const currentIndex = COLUMN_ORDER.indexOf(columnId);
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < COLUMN_ORDER.length - 1;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task.id, columnId)}
    >
      <div className="task-header">
        <span className="task-title" onClick={() => setExpanded(!expanded)}>
          {task.title}
        </span>
        <button className="delete-btn" onClick={() => onDelete(task.id, columnId)} title="Delete task">
          ×
        </button>
      </div>
      {expanded && task.description && (
        <p className="task-description">{task.description}</p>
      )}
      <div className="task-actions">
        {canMoveLeft && (
          <button
            className="move-btn"
            onClick={() => onMove(task.id, columnId, COLUMN_ORDER[currentIndex - 1])}
            title={`Move to ${COLUMN_ORDER[currentIndex - 1]}`}
          >
            ← {COLUMN_ORDER[currentIndex - 1]}
          </button>
        )}
        {canMoveRight && (
          <button
            className="move-btn"
            onClick={() => onMove(task.id, columnId, COLUMN_ORDER[currentIndex + 1])}
            title={`Move to ${COLUMN_ORDER[currentIndex + 1]}`}
          >
            {COLUMN_ORDER[currentIndex + 1]} →
          </button>
        )}
      </div>
    </div>
  );
}
