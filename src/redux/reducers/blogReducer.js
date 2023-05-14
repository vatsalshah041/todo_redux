import { ActionTypes } from "../constants/action-type";

const initialState={
    blogs:[],
}

export const blogReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_BLOG:
            {
                //console.log(payload)
            return {...state,blogs:payload};
            }
    
        default:
            return state;
    }
}