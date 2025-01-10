"use client";
import React, { useState } from "react";
import TodoList from "./TodoList";
import { addTodo } from "../utils/supabasefuncitons";
import { Todo } from "../utils/interfaces";
import { useRouter } from "next/navigation";

type Props = {
  todos: Todo[] | null;
};

const TodoApp = (props: Props) => {
  const { todos } = props;
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") return;
    //Todoの追加
    await addTodo(title);
    router.refresh();
    setTitle("");
  };

  return (
    <section className="text-center mb-2 text-2x1 font-medium">
      <h3>Supabase Todo App</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">
          Add
        </button>
      </form>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodoApp;
