import { createStore, combineReducers } from "redux";
import contactReducers from "./contactReducers"
import {blogReducer} from './blogReducer'

const reducers = combineReducers({
    contactPage: contactReducers,
    singleBlogPage: blogReducer,
});
const store = createStore(reducers);

export default store;