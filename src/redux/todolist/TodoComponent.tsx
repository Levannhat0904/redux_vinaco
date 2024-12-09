// TodoComponent.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addTodo, removeTodo, toggleTodo, updateTodo } from "./todoSlice";

const TodoComponent = () => {
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState<{
    id: number;
    text: string;
  } | null>(null);
  const dispatch = useAppDispatch();

  // Truy cập todos từ state
  const todos = useAppSelector((state) => state.todo.todos);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleUpdateTodo = () => {
    if (editingTodo && newTodo.trim()) {
      dispatch(updateTodo({ id: editingTodo.id, newText: newTodo }));
      setEditingTodo(null);
      setNewTodo("");
    }
  };

  const handleEditClick = (todo: { id: number; text: string }) => {
    setEditingTodo(todo);
    setNewTodo(todo.text); // Đặt lại giá trị cho ô nhập khi edit
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add or update a task"
      />
      <button onClick={editingTodo ? handleUpdateTodo : handleAddTodo}>
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
