import * as UtilsAPI from './UtilsAPI';

export const getAllSpeciality = (token,success,error,search) => {
    return UtilsAPI.getAll('speciality',token,success,error,search);
}

export const getAllWithPageSpeciality = (token,elementCount,actualPage,success,error,search) => {
    return UtilsAPI.getAllWithPage('speciality',token,elementCount,actualPage,success,error,search);
}

export const getSpeciality = (specialityId,token,success,error) => {
    return UtilsAPI.get('speciality',token,specialityId,success,error);
}

export const postSpeciality = (token,data,success,error) => {
    return UtilsAPI.post('speciality',token,data,success,error);
}

export const patchSpeciality = (token,specialityId,data,success,error) => {
    return UtilsAPI.patch('speciality',token,specialityId,data,success,error);
}

export const removeSpeciality = (token,specialityId,success,error) => {
    return UtilsAPI.remove('speciality',token,specialityId,success,error);
}