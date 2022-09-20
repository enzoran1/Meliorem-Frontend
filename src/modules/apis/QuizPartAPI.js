import * as UtilsAPI from './UtilsAPI';

export const getAllQuizPart = (token,success,error,search) => {
    return UtilsAPI.getAll('quiz-part',token,success,error,search);
}

export const getAllWithPageQuizPart = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('quiz-part',token,elementCount,actualPage,success,error,search);
}

export const getQuizPart = (quizPartId,token,success,error) => {
    return UtilsAPI.get('quiz-part',token,quizPartId,success,error);
}

export const postQuizPart = (token,data,success,error) => {
    return UtilsAPI.post('quiz-part',token,data,success,error);
}

export const patchQuizPart = (token,quizPartId,data,success,error) => {
    return UtilsAPI.patch('quiz-part',token,quizPartId,data,success,error);
}

export const removeQuizPart = (token,quizPartId,success,error) => {
    return UtilsAPI.remove('quiz-part',token,quizPartId,success,error);
}