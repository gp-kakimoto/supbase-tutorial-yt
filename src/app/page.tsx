import TodoApp from "./components/TodoApp";
import { getAllTodos } from "./utils/supabasefuncitons";
import { Todo } from "./utils/interfaces";
export default async function Home() {
  const todos: Todo[] | null = await getAllTodos();
  return (
    <div>
      <section className="flex justify-center items-center h-screen">
        <TodoApp todos={todos} />
      </section>
    </div>
  );
}
