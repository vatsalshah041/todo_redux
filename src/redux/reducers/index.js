import { combineReducers } from "redux";
import { blogReducer } from "./blogReducer";

const reducers=combineReducers({
    allBlogs:blogReducer,
});

export default reducers;