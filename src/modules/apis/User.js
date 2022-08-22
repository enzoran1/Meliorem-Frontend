import * as UtilsAPI from './UtilsAPI';

export const getAllUser = (token,success,error) => {
    return UtilsAPI.getAll('user',token,success,error);
}

export const getUser = (userId,token,success,error) => {
    return UtilsAPI.get('user',token,userId,success,error);
}

export const postUser = (token,data,success,error) => {
    return UtilsAPI.post('user',token,data,success,error);
}

export const patchUser = (token,userId,data,success,error) => {
    return UtilsAPI.patch('user',token,userId,data,success,error);
}

export const removeUser = (token,userId,success,error) => {
    return UtilsAPI.remove('user',token,userId,success,error);
}