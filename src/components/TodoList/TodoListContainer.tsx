import * as React from "react";
import TodoList from "./TodoList";
import { useTodos } from "./hooks";

const TodoListContainer = () => {
  const { data, isLoading, dispatchGetTodos } = useTodos();

  return (
    <TodoList data={data} isLoading={isLoading} onGetTodos={dispatchGetTodos} />
  );
};

export default TodoListContainer;
