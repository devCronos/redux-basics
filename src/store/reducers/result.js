import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    // if elements are objects then the objects inside the array still point to the original array
    // const newArr = [...state.results].splice(id, 1);

    // just copies
    // const updatedArray = state.results.filter(result => true);
    const updatedArray = state.results.filter(result => result.id!==action.resultElId);
    return updateObject(state,{results: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state,{results: state.results.concat({id: new Date() , value: action.result})});
            // concat works like copy+push here
        case actionTypes.DELETE_RESULT:
            return deleteResult(state,action);
            
        default:
    }
    
    return state;
}

export default reducer;