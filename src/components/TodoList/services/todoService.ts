import { ITodo } from "./typings";

export default {
  getTodos: async (): Promise<ITodo[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    return json;
  }
};
