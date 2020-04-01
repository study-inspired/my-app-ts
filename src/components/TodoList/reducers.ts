import { initialState, TodoListState } from "./state";
import { handleActions, Action } from "redux-actions";
import { getTodos, getTodosSuccess, getTodosFail } from "./actions";
import { ITodo } from "./services/typings";

const reducers = handleActions(
  new Map([
    [
      getTodos,
      (state: TodoListState, action: Action<{}>) => ({
        ...state,
        action: action.type
      })
    ],
    [
      getTodosSuccess,
      (state: TodoListState, action: Action<{ data: ITodo[] }>) => ({
        ...state,
        action: action.type,
        data: action.payload.data
      })
    ],
    [
      getTodosFail,
      (state: TodoListState, action: Action<any>) => ({
        ...state,
        action: action.type,
        error: action.payload.error
      })
    ]
  ]) as any,
  initialState
);

export default { todo: reducers };
