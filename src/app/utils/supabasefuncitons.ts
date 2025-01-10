import { Todo } from "./interfaces";
import { supabase } from "./supabase";

export const getAllTodos = async (): Promise<Todo[] | null> => {
  const todos = await supabase.from("todo").select("*");
  return todos.data;
};

export const addTodo = async (title: string) => {
  const { data, error } = await supabase
    .from("todo")
    .insert([{ title: title }])
    .select();
  //  console.log(data);
  if (error) return null;
  else return data;
};

export const deleteTodo = async (id: number) => {
  const { error } = await supabase.from("todo").delete().eq("id", id);
  if (error) return null;
};
