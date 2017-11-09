import { types } from '../config/constants';

export function createCourse(course) {
    return {
        type: types.CREATE_COURSE,
        course
    };
}