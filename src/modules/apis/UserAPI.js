import * as UtilsAPI from './UtilsAPI';
import axios from 'axios';

export const BASE_URL = "https://localhost:8000/api";

export const getAllUser = (token,success,error) => {
    return UtilsAPI.getAll('user',token,success,error);
}

export const getAllWithPageUser = (token,elementCount,actualPage,success,error) => {
    return UtilsAPI.getAllWithPage('user',token,elementCount,actualPage,success,error);
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

export const login = (username, password, success, error) => {
    axios
      .post(`${BASE_URL}/login`, { username, password })
      .then((response) => {
        if (success) success(response.data);
      })
      .catch((err) => {
        if (error) error(err.response.data);
      });
  };
  
  export const getMyUser = (token, success, error) => {
    axios
      .get(`${BASE_URL}/user/me`, UtilsAPI.getTokenHeader(token))
      .then((response) => {
        if (success) success(response.data);
      })
      .catch((err) => {
        if (error) error(err.response.data);
      });
  };