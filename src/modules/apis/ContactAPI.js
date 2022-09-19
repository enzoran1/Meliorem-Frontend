import * as UtilsAPI from './UtilsAPI';

export const getAllContact = (token,success,error,search) => {
    return UtilsAPI.getAll('contact',token,success,error,search);
}

export const getAllWithPageContact = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('contact',token,elementCount,actualPage,success,error,search);
}

export const getContact = (contactId,token,success,error) => {
    return UtilsAPI.get('contact',token,contactId,success,error);
}

export const postContact = (token,data,success,error) => {
    return UtilsAPI.post('contact',token,data,success,error);
}

export const patchContact = (token,contactId,data,success,error) => {
    return UtilsAPI.patch('contact',token,contactId,data,success,error);
}

export const removeContact = (token,contactId,success,error) => {
    return UtilsAPI.remove('contact',token,contactId,success,error);
}