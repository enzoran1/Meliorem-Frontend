import * as UtilsAPI from './UtilsAPI';

export const getAllSkill = (token,success,error,search) => {
    return UtilsAPI.getAll('skill',token,success,error,search);
}

export const getAllWithPageSkill = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('skill',token,elementCount,actualPage,success,error,search);
}

export const getSkill = (skillId,token,success,error) => {
    return UtilsAPI.get('skill',token,skillId,success,error);
}

export const postSkill = (token,data,success,error) => {
    return UtilsAPI.post('skill',token,data,success,error);
}

export const patchSkill = (token,skillId,data,success,error) => {
    return UtilsAPI.patch('skill',token,skillId,data,success,error);
}

export const removeSkill = (token,skillId,success,error) => {
    return UtilsAPI.remove('skill',token,skillId,success,error);
}