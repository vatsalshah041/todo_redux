import { ActionTypes } from "../constants/action-type"
export const addblog=(blog)=>{
    return{
        type:ActionTypes.ADD_BLOG,
        payload:blog,
    };

};

export const delblog=(blog)=>{
    return{
        type:ActionTypes.DEL_BLOG,
        payload:blog,
    };

};

export const adding=(blog)=>{
    return{
        type:ActionTypes.ADDING,
        payload:blog,
    };

};