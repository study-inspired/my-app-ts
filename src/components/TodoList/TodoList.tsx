import * as React from "react";
import { ITodo } from "./services/typings";

interface IProps {
  data: ITodo[];
  isLoading: boolean;
  onGetTodos: () => void;
}

const TodoList = (props: IProps) => {
  const { data, isLoading, onGetTodos } = props;

  React.useEffect(() => {
    onGetTodos();
  }, [onGetTodos]);

  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
