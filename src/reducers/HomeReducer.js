/**
 * Created by weimin on 17-2-15.
 */
let initialState = {courses:[]};
export default function(state = initialState,action){
    switch(action.type){
        case "getCourse":
            return Object.assign({},state,{courses:action.data});
        default:
            return state;
    }
}