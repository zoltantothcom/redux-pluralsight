import { types } from '../config/constants';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        
        default:
            return state;
    }
}