import * as UtilsAPI from './UtilsAPI';

export const getAllTypeContact = (token,success,error) => {
    return UtilsAPI.getAll('type-contact',token,success,error);
}

export const getAllWithPageTypeContact = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('type-contact',token,elementCount,actualPage,success,error);
}

export const getTypeContact = (typeContactId,token,success,error) => {
    return UtilsAPI.get('type-contact',token,typeContactId,success,error);
}

export const postTypeContact = (token,data,success,error) => {
    return UtilsAPI.post('type-contact',token,data,success,error);
}

export const patchTypeContact = (token,typeContactId,data,success,error) => {
    return UtilsAPI.patch('type-contact',token,typeContactId,data,success,error);
}

export const removeTypeContact = (token,typeContactId,success,error) => {
    return UtilsAPI.remove('type-contact',token,typeContactId,success,error);
}