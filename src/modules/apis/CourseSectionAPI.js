import * as UtilsAPI from './UtilsAPI';

export const getAllCourseSection = (token,success,error) => {
    return UtilsAPI.getAll('course-section',token,success,error);
}

export const getAllWithPageCourseSection = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('course-section',token,elementCount,actualPage,success,error);
}

export const getCourseSection = (courseSectionId,token,success,error) => {
    return UtilsAPI.get('course-section',token,courseSectionId,success,error);
}

export const postCourseSection = (token,data,success,error) => {
    return UtilsAPI.post('course-section',token,data,success,error);
}

export const patchCourseSection = (token,courseSectionId,data,success,error) => {
    return UtilsAPI.patch('course-section',token,courseSectionId,data,success,error);
}

export const removeCourseSection = (token,courseSectionId,success,error) => {
    return UtilsAPI.remove('course-section',token,courseSectionId,success,error);
}