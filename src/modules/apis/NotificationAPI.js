import * as UtilsAPI from './UtilsAPI';

export const getAllNotification = (token,success,error,search) => {
    return UtilsAPI.getAll('notification',token,success,error,search);
}

export const getAllWithPageNotification = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('notification',token,elementCount,actualPage,success,error,search);
}

export const getNotification = (notificationId,token,success,error) => {
    return UtilsAPI.get('notification',token,notificationId,success,error);
}

export const postNotification = (token,data,success,error) => {
    return UtilsAPI.post('notification',token,data,success,error);
}

export const patchNotification = (token,notificationId,data,success,error) => {
    return UtilsAPI.patch('notification',token,notificationId,data,success,error);
}

export const removeNotification = (token,notificationId,success,error) => {
    return UtilsAPI.remove('notification',token,notificationId,success,error);
}