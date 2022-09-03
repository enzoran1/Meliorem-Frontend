import * as UtilsAPI from './UtilsAPI';

export const getAllSpeaker = (token,success,error) => {
    return UtilsAPI.getAll('speaker',token,success,error);
}

export const getAllWithPageSpeaker = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('speaker',token,elementCount,actualPage,success,error);
}

export const getSpeaker = (speakerId,token,success,error) => {
    return UtilsAPI.get('speaker',token,speakerId,success,error);
}

export const postSpeaker = (token,data,success,error) => {
    return UtilsAPI.post('speaker',token,data,success,error);
}

export const patchSpeaker = (token,speakerId,data,success,error) => {
    return UtilsAPI.patch('speaker',token,speakerId,data,success,error);
}

export const removeSpeaker = (token,speakerId,success,error) => {
    return UtilsAPI.remove('speaker',token,speakerId,success,error);
}