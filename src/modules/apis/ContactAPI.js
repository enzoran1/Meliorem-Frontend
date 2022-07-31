import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}

export function getAllContact(token, success, error) {
    axios
        .get(`${BASE_URL}/contact`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function getContact(token, id, success, error) {
    axios
        .get(`${BASE_URL}/contact/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function deleteContact(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/contact/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function createContact(token, data, success, error) {
    axios
        .post(`${BASE_URL}/contact`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function updateContact(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/contact/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
