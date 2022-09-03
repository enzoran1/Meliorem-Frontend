import * as UtilsAPI from './UtilsAPI';

export const getAllStudent = (token,success,error) => {
    return UtilsAPI.getAll('student',token,success,error);
}

export const getAllWithPageStudent = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('student',token,elementCount,actualPage,success,error);
}

export const getStudent = (studentId,token,success,error) => {
    return UtilsAPI.get('student',token,studentId,success,error);
}

export const postStudent = (token,data,success,error) => {
    return UtilsAPI.post('student',token,data,success,error);
}

export const patchStudent = (token,studentId,data,success,error) => {
    return UtilsAPI.patch('student',token,studentId,data,success,error);
}

export const removeStudent = (token,studentId,success,error) => {
    return UtilsAPI.remove('student',token,studentId,success,error);
}