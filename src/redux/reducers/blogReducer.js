import { ActionTypes } from "../constants/action-type";

const initialState={
    blogs:[],
}

export const blogReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_BLOG:
            {

                console.log(typeof(payload));
                console.log(payload);
            return {...state,blogs:payload};
            }
        case ActionTypes.ADDING:
            {
                console.log((payload));
                const updated=[...state.blogs,payload]
                // const updated=[...state.blogs,payload]
                // console.log(updated);
                return{...state,blogs:updated   }
            }
        case ActionTypes.DEL_BLOG:
            {
                const updatedBlogs = state.blogs.filter((blog) => blog.id !== payload);
                return { ...state, blogs: updatedBlogs };
                
            }
    
        default:
            return state;
    }
}