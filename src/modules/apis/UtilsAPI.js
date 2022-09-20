import axios from "axios";
import config from '../../config.js'
export const BASE_URL = config.backURL;

export function getTokenHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

/**
 * @param {*} url  (without slash)
 * @param {*} token
 * @param {*} success
 * @param {*} error
 * @example
 * get("users", token, success, error)
 */
export function getAll(url, token, success, error) {
  axios
    .get(`${BASE_URL}/${url}/`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err);
    });
}

export function get(url, token, id, success, error) {
  axios
    .get(`${BASE_URL}/${url}/${id}/`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err);
    });
}

export function post(url, token, data, success, error) {
  axios
    .post(`${BASE_URL}/${url}/`, data, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

export function patch(url, token, id, data, success, error) {
  axios
    .patch(`${BASE_URL}/${url}/${id}`, data, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

export function remove(url, token, id, success, error) {
  axios
    .delete(`${BASE_URL}/${url}/${id}`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

export function getAllWithPage(url, token, elementCount, actualPage, success, error) {
  axios
    .get(
      `${BASE_URL}/${url}/${elementCount}/${actualPage}/`,
      getTokenHeader(token)
    )
    .then((response) => {
      if (success) success(response.data);
    }).catch((err) => {
      if (error) error(err);
    }
    );
}
