import todoReducers from "./components/TodoList/reducers";
import {combineReducers} from "redux";

export default combineReducers({...todoReducers});
