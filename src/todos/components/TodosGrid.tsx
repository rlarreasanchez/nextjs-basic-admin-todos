"use client";

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";

import * as todosApi from "@/todos/helpers/todos";
import { updateTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";

interface TodosGridProps {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await todosApi.updateTodo(id, complete);
    console.log(updateTodo);

    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
