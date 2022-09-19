import * as UtilsAPI from './UtilsAPI';

export const getAllCourse = (token,success,error,search) => {
    return UtilsAPI.getAll('course',token,success,error,search);
}

export const getAllWithPageCourse = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('course',token,elementCount,actualPage,success,error,search);
}

export const getCourse = (courseId,token,success,error) => {
    return UtilsAPI.get('course',token,courseId,success,error);
}

export const postCourse = (token,data,success,error) => {
    return UtilsAPI.post('course',token,data,success,error);
}

export const patchCourse = (token,courseId,data,success,error) => {
    return UtilsAPI.patch('course',token,courseId,data,success,error);
}

export const removeCourse = (token,courseId,success,error) => {
    return UtilsAPI.remove('course',token,courseId,success,error);
}