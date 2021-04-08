import { createStore, combineReducers } from "redux";
import contactReducers from "./contactReducers"

const reducers = combineReducers({
    pages: contactReducers,
});
const store = createStore(reducers);

export default store;