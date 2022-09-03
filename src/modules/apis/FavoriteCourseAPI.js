import * as UtilsAPI from './UtilsAPI';

export const getAllFavoriteCourse = (token,success,error) => {
    return UtilsAPI.getAll('favorite-course',token,success,error);
}

export const getAllWithPageFavoriteCourse = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('favorite-course',token,elementCount,actualPage,success,error);
}

export const getFavoriteCourse = (favoriteCourseId,token,success,error) => {
    return UtilsAPI.get('favorite-course',token,favoriteCourseId,success,error);
}

export const postFavoriteCourse = (token,data,success,error) => {
    return UtilsAPI.post('favorite-course',token,data,success,error);
}

export const patchFavoriteCourse = (token,favoriteCourseId,data,success,error) => {
    return UtilsAPI.patch('favorite-course',token,favoriteCourseId,data,success,error);
}

export const removeFavoriteCourse = (token,favoriteCourseId,success,error) => {
    return UtilsAPI.remove('favorite-course',token,favoriteCourseId,success,error);
}