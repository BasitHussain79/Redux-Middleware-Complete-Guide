import { actionTypes } from './constants';

const counterReducer = (state = 0, action) => {
    console.log('Reducer ran', action.type);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default: 
            return state;
    }
}

export default counterReducer;
