import * as UtilsAPI from './UtilsAPI';

export const getAllCoursePartQuiz = (token,success,error) => {
    return UtilsAPI.getAll('course-part-quiz',token,success,error);
}

export const getCoursePartQuiz = (coursePartQuizId,token,success,error) => {
    return UtilsAPI.get('course-part-quiz',token,coursePartQuizId,success,error);
}

export const postCoursePartQuiz = (token,data,success,error) => {
    return UtilsAPI.post('course-part-quiz',token,data,success,error);
}

export const patchCoursePartQuiz = (token,coursePartQuizId,data,success,error) => {
    return UtilsAPI.patch('course-part-quiz',token,coursePartQuizId,data,success,error);
}

export const removeCoursePartQuiz = (token,coursePartQuizId,success,error) => {
    return UtilsAPI.remove('course-part-quiz',token,coursePartQuizId,success,error);
}