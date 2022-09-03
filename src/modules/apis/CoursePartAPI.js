import * as UtilsAPI from './UtilsAPI';

export const getAllCoursePart = (token,success,error) => {
    return UtilsAPI.getAll('course-part',token,success,error);
}

export const getAllWithPageCoursePart = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('course-part',token,elementCount,actualPage,success,error);
}

export const getCoursePart = (coursePartId,token,success,error) => {
    return UtilsAPI.get('course-part',token,coursePartId,success,error);
}

export const postCoursePart = (token,data,success,error) => {
    return UtilsAPI.post('course-part',token,data,success,error);
}

export const patchCoursePart = (token,coursePartId,data,success,error) => {
    return UtilsAPI.patch('course-part',token,coursePartId,data,success,error);
}

export const removeCoursePart = (token,coursePartId,success,error) => {
    return UtilsAPI.remove('course-part',token,coursePartId,success,error);
}