import * as UtilsAPI from './UtilsAPI';

export const getAllQuizPart = (token,success,error) => {
    return UtilsAPI.getAll('quiz-part',token,success,error);
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