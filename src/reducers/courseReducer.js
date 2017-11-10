import { types } from '../config/constants';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
        default:
            return state;
    }
}