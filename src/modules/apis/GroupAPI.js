import * as UtilsAPI from './UtilsAPI';

export const getAllGroup = (token,success,error,search) => {
    return UtilsAPI.getAll('group',token,success,error,search);
}

export const getAllWithPageGroup = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('group',token,elementCount,actualPage,success,error,search);
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