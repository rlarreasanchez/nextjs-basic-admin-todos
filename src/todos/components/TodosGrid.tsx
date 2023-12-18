"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
