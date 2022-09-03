import * as UtilsAPI from './UtilsAPI';

export const getAllCoursePartDocument = (token,success,error) => {
    return UtilsAPI.getAll('course-part-document',token,success,error);
}

export const getAllWithPageCoursePartDocument = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('course-part-document',token,elementCount,actualPage,success,error);
}

export const getCoursePartDocument = (coursePartDocumentId,token,success,error) => {
    return UtilsAPI.get('course-part-document',token,coursePartDocumentId,success,error);
}

export const postCoursePartDocument = (token,data,success,error) => {
    return UtilsAPI.post('course-part-document',token,data,success,error);
}

export const patchCoursePartDocument = (token,coursePartDocumentId,data,success,error) => {
    return UtilsAPI.patch('course-part-document',token,coursePartDocumentId,data,success,error);
}

export const removeCoursePartDocument = (token,coursePartDocumentId,success,error) => {
    return UtilsAPI.remove('course-part-document',token,coursePartDocumentId,success,error);
}