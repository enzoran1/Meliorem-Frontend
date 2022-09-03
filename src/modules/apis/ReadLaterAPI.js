import * as UtilsAPI from './UtilsAPI';

export const getAllReadLater = (token,success,error) => {
    return UtilsAPI.getAll('read-later',token,success,error);
}

export const getAllWithPageReadLater = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('read-later',token,elementCount,actualPage,success,error);
}

export const getReadLater = (readLaterId,token,success,error) => {
    return UtilsAPI.get('read-later',token,readLaterId,success,error);
}

export const postReadLater = (token,data,success,error) => {
    return UtilsAPI.post('read-later',token,data,success,error);
}

export const patchReadLater = (token,readLaterId,data,success,error) => {
    return UtilsAPI.patch('read-later',token,readLaterId,data,success,error);
}

export const removeReadLater = (token,readLaterId,success,error) => {
    return UtilsAPI.remove('read-later',token,readLaterId,success,error);
}