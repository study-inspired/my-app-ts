import { ITodo } from "./services/typings";

export type TodoListState = {
  action: string;
  error: any;
  data: ITodo[];
};

export const initialState: TodoListState = {
  action: "",
  error: null,
  data: []
};
