import * as UtilsAPI from './UtilsAPI';

export const getAllCourseCategory = (token,success,error,search) => {
    return UtilsAPI.getAll('course-category',token,success,error,search);
}

export const getAllWithPageCourseCategory = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('course-category',token,elementCount,actualPage,success,error,search);
}

export const getCourseCategory = (courseCategoryId,token,success,error) => {
    return UtilsAPI.get('course-category',token,courseCategoryId,success,error);
}

export const postCourseCategory = (token,data,success,error) => {
    return UtilsAPI.post('course-category',token,data,success,error);
}

export const patchCourseCategory = (token,courseCategoryId,data,success,error) => {
    return UtilsAPI.patch('course-category',token,courseCategoryId,data,success,error);
}

export const removeCourseCategory = (token,courseCategoryId,success,error) => {
    return UtilsAPI.remove('course-category',token,courseCategoryId,success,error);
}