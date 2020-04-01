import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { getTodos, getTodosSuccess, getTodosFail } from "./actions";
import { todoListStateSelector } from "./selectors";
import todoService from "./services/todoService";

export const useTodos = () => {
  const dispatch = useDispatch();

  const dispatchGetTodos = useCallback(async () => {
    try {
      dispatch(getTodos());
      const data = await todoService.getTodos();
      dispatch(getTodosSuccess({ data }));
    } catch (error) {
      dispatch(getTodosFail({ error }));
    }
  }, [dispatch]);

  const { action, error, data } = useSelector(todoListStateSelector);

  const isLoading = getTodos.toString() === action;

  return {
    dispatchGetTodos,
    data,
    action,
    error,
    isLoading
  };
};
