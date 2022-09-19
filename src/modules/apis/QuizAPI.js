import * as UtilsAPI from './UtilsAPI';

export const getAllQuiz = (token,success,error,search) => {
    return UtilsAPI.getAll('quiz',token,success,error,search);
}

export const getAllWithPageQuiz = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('quiz',token,elementCount,actualPage,success,error,search);
}

export const getQuiz = (quizId,token,success,error) => {
    return UtilsAPI.get('quiz',token,quizId,success,error);
}

export const postQuiz = (token,data,success,error) => {
    return UtilsAPI.post('quiz',token,data,success,error);
}

export const patchQuiz = (token,quizId,data,success,error) => {
    return UtilsAPI.patch('quiz',token,quizId,data,success,error);
}

export const removeQuiz = (token,quizId,success,error) => {
    return UtilsAPI.remove('quiz',token,quizId,success,error);
}