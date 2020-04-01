import { createAction } from "redux-actions";

const getTodos = createAction("GET_TODOS");
const getTodosSuccess = createAction("GET_TODOS_SUCCESS");
const getTodosFail = createAction("GET_TODOS_FAIL");

export { getTodos, getTodosSuccess, getTodosFail };
