import { createStore, combineReducers } from "redux";
import contactReducers from "./reducer"

const reducers = combineReducers({
    pages: contactReducers,
});
const store = createStore(reducers);

export default store;