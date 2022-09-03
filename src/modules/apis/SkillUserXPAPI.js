import * as UtilsAPI from './UtilsAPI';

export const getAllSkillUserXP = (token,success,error) => {
    return UtilsAPI.getAll('skill-user-xp',token,success,error);
}

export const getAllWithPageSkillUserXP = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('skill-user-xp',token,elementCount,actualPage,success,error);
}

export const getSkillUserXP = (skillUserXPId,token,success,error) => {
    return UtilsAPI.get('skill-user-xp',token,skillUserXPId,success,error);
}

export const postSkillUserXP = (token,data,success,error) => {
    return UtilsAPI.post('skill-user-xp',token,data,success,error);
}

export const patchSkillUserXP = (token,skillUserXPId,data,success,error) => {
    return UtilsAPI.patch('skill-user-xp',token,skillUserXPId,data,success,error);
}

export const removeSkillUserXP = (token,skillUserXPId,success,error) => {
    return UtilsAPI.remove('skill-user-xp',token,skillUserXPId,success,error);
}