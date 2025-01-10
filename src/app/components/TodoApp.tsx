"use client";
//import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import TodoList from "./TodoList";
//import { addTodo, getAllTodos } from "../utils/supabasefuncitons";
import { addTodo } from "../utils/supabasefuncitons";
import { Todo } from "../utils/interfaces";
import { useRouter } from "next/navigation";

type Props = {
  todos: Todo[] | null;
};

const TodoApp = (props: Props) => {
  const { todos } = props;
  //  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  //const todos = await getAllTodos();
  /*
  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      if (todos) {
        setTodos(todos);
      }
      console.log(todos);
    };
    getTodos();
  }, []);
*/
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") return;
    //Todoの追加
    await addTodo(title);
    /* const tmp_todos = await getAllTodos();
    if (tmp_todos) {
      setTodos(tmp_todos);
    }
      */
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
