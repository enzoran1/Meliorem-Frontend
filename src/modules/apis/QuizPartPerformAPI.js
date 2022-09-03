import * as UtilsAPI from './UtilsAPI';

export const getAllQuizPartPerform = (token,success,error) => {
    return UtilsAPI.getAll('quiz-part-perform',token,success,error);
}

export const getAllWithPageQuizPartPerform = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('quiz-part-perform',token,elementCount,actualPage,success,error);
}

export const getQuizPartPerform = (quizPartPerformId,token,success,error) => {
    return UtilsAPI.get('quiz-part-perform',token,quizPartPerformId,success,error);
}

export const postQuizPartPerform = (token,data,success,error) => {
    return UtilsAPI.post('quiz-part-perform',token,data,success,error);
}

export const patchQuizPartPerform = (token,quizPartPerformId,data,success,error) => {
    return UtilsAPI.patch('quiz-part-perform',token,quizPartPerformId,data,success,error);
}

export const removeQuizPartPerform = (token,quizPartPerformId,success,error) => {
    return UtilsAPI.remove('quiz-part-perform',token,quizPartPerformId,success,error);
}