import { actionTypes } from './constants';

export const increment = () => {
    return {type: actionTypes.INCREMENT}
}

export const decrement = () => {
    return {type: actionTypes.DECREMENT}
}
