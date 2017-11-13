import { types } from '../config/constants';
import initialState from '../config/initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        
        default:
            return state;
    }
}