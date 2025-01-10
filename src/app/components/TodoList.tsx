import React from "react";
import { Todo } from "../utils/interfaces";
import { deleteTodo } from "../utils/supabasefuncitons";
import { useRouter } from "next/navigation";

type Props = {
  todos: Todo[] | null;
};
const TodoList = (props: Props) => {
  const { todos } = props;
  const router = useRouter();
  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    router.refresh();
  };
  return (
    <div>
      <ul className="mx-auto">
        {todos
          ? todos.map((todo) => (
              <div
                key={todo.id}
                className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between"
              >
                <li className="font-medium ">✅ {todo.title}</li>
                <span
                  className="coursor-pointer"
                  onClick={async () => {
                    await handleDelete(todo.id);
                  }}
                >
                  ✖
                </span>
              </div>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default TodoList;
