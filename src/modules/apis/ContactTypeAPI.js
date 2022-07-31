import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}

export function getAllContactType(token, success, error) {
    axios
        .get(`${BASE_URL}/type-contact`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function getContactType(token, id, success, error) {
    axios
        .get(`${BASE_URL}/type-contact/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function deleteContactType(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/type-contact/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function createContactType(token, data, success, error) {
    axios
        .post(`${BASE_URL}/type-contact`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function updateContactType(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/type-contact/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
