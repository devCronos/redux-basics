import * as actionTypes from '../actions/actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date() , value: action.result})
                // concat works like copy+push here
            }
        case actionTypes.DELETE_RESULT:
            // if elements are objects then the objects inside the array still point to the original array
            // const newArr = [...state.results].splice(id, 1);

            // just copies
            // const updatedArray = state.results.filter(result => true);
            const updatedArray = state.results.filter(result => result.id!==action.resultElId);

            return{
                ...state,
                results: updatedArray
                // concat works like copy+push here
            }
        default:
    }
    
    return state;
}

export default reducer;