import * as UtilsAPI from './UtilsAPI';

export const getAllReceivedNotification = (token,success,error) => {
    return UtilsAPI.getAll('received-notification',token,success,error);
}

export const getReceivedNotification = (receivedNotificationId,token,success,error) => {
    return UtilsAPI.get('received-notification',token,receivedNotificationId,success,error);
}

export const postReceivedNotification = (token,data,success,error) => {
    return UtilsAPI.post('received-notification',token,data,success,error);
}

export const patchReceivedNotification = (token,receivedNotificationId,data,success,error) => {
    return UtilsAPI.patch('received-notification',token,receivedNotificationId,data,success,error);
}

export const removeReceivedNotification = (token,receivedNotificationId,success,error) => {
    return UtilsAPI.remove('received-notification',token,receivedNotificationId,success,error);
}