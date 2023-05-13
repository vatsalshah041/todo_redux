import { ActionTypes } from "../constants/action-type";

const initialState={
    blogs:[
        {
            "userId": 1,
            "id": 1,
            "title": "testing",
            "body": "testing"
        }
    ]
}

export const blogReducer=(state={initialState},{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_BLOG:
            return state;
    
        default:
            return state;
    }
}