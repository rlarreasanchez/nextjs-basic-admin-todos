"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import { toggleTodo } from "../actions/todo-actions";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
