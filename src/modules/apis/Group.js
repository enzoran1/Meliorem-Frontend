import * as UtilsAPI from './UtilsAPI';

export const getAllGroup = (token,success,error) => {
    return UtilsAPI.getAll('group',token,success,error);
}

export const getGroup = (groupId,token,success,error) => {
    return UtilsAPI.get('group',token,groupId,success,error);
}

export const postGroup = (token,data,success,error) => {
    return UtilsAPI.post('group',token,data,success,error);
}

export const patchGroup = (token,groupId,data,success,error) => {
    return UtilsAPI.patch('group',token,groupId,data,success,error);
}

export const removeGroup = (token,groupId,success,error) => {
    return UtilsAPI.remove('group',token,groupId,success,error);
}