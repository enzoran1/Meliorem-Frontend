import * as UtilsAPI from './UtilsAPI';

export const getAllBadge = (token,success,error) => {
    return UtilsAPI.getAll('badge',token,success,error);
}

export const getAllWithPageBadge = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('badge',token,elementCount,actualPage,success,error);
}

export const getBadge = (badgeId,token,success,error) => {
    return UtilsAPI.get('badge',token,badgeId,success,error);
}

export const postBadge = (token,data,success,error) => {
    return UtilsAPI.post('badge',token,data,success,error);
}

export const patchBadge = (token,badgeId,data,success,error) => {
    return UtilsAPI.patch('badge',token,badgeId,data,success,error);
}

export const removeBadge = (token,badgeId,success,error) => {
    return UtilsAPI.remove('badge',token,badgeId,success,error);
}