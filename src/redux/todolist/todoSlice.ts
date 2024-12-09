// todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
        id: number;
        text: string;
        completed: boolean;
}

interface TodoState {
        todos: Todo[];
}

const initialState: TodoState = {
        todos: [],
};

const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
                addTodo: (state, action: PayloadAction<string>) => {
                        state.todos.push({ id: Date.now(), text: action.payload, completed: false });
                },
                removeTodo: (state, action: PayloadAction<number>) => {
                        state.todos = state.todos.filter(todo => todo.id !== action.payload);
                },
                toggleTodo: (state, action: PayloadAction<number>) => {
                        const todo = state.todos.find(todo => todo.id === action.payload);
                        if (todo) {
                                todo.completed = !todo.completed;
                        }
                },
                // Action để cập nhật todo
                updateTodo: (state, action: PayloadAction<{ id: number, newText: string }>) => {
                        const { id, newText } = action.payload;
                        const todo = state.todos.find(todo => todo.id === id);
                        if (todo) {
                                todo.text = newText; // Cập nhật nội dung todo
                        }
                },
        },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
