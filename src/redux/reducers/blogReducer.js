import { search } from "../actions/listAction";
import { ActionTypes } from "../constants/action-type";

const initialState = {
    blogs: [],
    originalBlogs:[],
}

export const blogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_BLOG:
            {

                console.log(typeof (payload));
                console.log(payload);
                return { ...state, blogs: payload ,originalBlogs:payload};
            }
        case ActionTypes.ADDING:
            {
                console.log((payload));
                const updated = [...state.blogs, payload]
                // const updated=[...state.blogs,payload]
                // console.log(updated);
                return { ...state, blogs: updated,originalBlogs:updated }
            }
        case ActionTypes.DEL_BLOG:
            {
                const updatedBlogs = state.blogs.filter((blog) => blog.id !== payload);
                return { ...state, blogs: updatedBlogs,originalBlogs:updatedBlogs };

            }

        case ActionTypes.SEARCH:
            {
                // console.log(payload);
                const hello=state.blogs;
                // console.log(hello)
                const searchTerm = payload.toLowerCase().trim();
                const filteredBlogs = state.blogs.filter(
                    (blog) => blog.body.toLowerCase().includes(searchTerm) || blog.title.toLowerCase().includes(searchTerm)
                );
                if (searchTerm === "" || filteredBlogs.length === 0) {
                    console.log("hello");
                    return {...state,blogs:state.originalBlogs}; // Return the original state without filtering
                } else {
                    return { ...state, blogs: filteredBlogs };
                }
            }
        default:
            return state;
    }
}