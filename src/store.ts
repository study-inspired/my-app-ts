import {createStore} from "redux";
import reducers from "./reducers";

export const configureStore = () => {
    const store = createStore(reducers, {});
    return store;
};
