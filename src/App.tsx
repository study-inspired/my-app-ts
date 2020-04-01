import * as React from "react";
import "./styles.css";
import {Provider} from "react-redux";
import {configureStore} from "./store";
import TodoList from "./components/TodoList";

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TodoList/>
            </div>
        </Provider>
    );
}
