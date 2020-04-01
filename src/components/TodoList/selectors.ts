import { TodoListState } from "./state";
export const todoListStateSelector = (state: any): TodoListState => state.todo;
