import * as actionTypes from './actionTypes';


export const saveResult = (payload) =>{

    // now we can have logic in the action creator because of middleware+thunk
    // this is an action creator. May be not very elegant to put much logic here. They say it belongs in the REDUCER
    return {
        type: actionTypes.STORE_RESULT,
        result: payload
    }  
}

export const storeResult = (payload) => {
    // this is an action creator
    return (dispatch, getState) => {
        // here you can do an async request
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(payload));
        },2000);
    }  
}

export const deleteResult = (payload) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: payload
    }    
}