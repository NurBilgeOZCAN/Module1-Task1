import { useState } from "react";
import type { ColumnId } from "../types";

interface AddTaskFormProps {
  columnId: ColumnId;
  onAdd: (columnId: ColumnId, title: string, description: string) => void;
}

export default function AddTaskForm({ columnId, onAdd }: AddTaskFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(columnId, title.trim(), description.trim());
    setTitle("");
    setDescription("");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button className="add-task-btn" onClick={() => setIsOpen(true)}>
        + Add Task
      </button>
    );
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
      />
      <div className="form-actions">
        <button type="submit" className="submit-btn">Add</button>
        <button type="button" className="cancel-btn" onClick={() => setIsOpen(false)}>Cancel</button>
      </div>
    </form>
  );
}
