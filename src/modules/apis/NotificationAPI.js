import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}

export function getAllNotification(token, success, error) {
    axios
        .get(`${BASE_URL}/notification`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function getNotification(token, id, success, error) {
    axios
        .get(`${BASE_URL}/notification/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }

export function deleteNotification(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/notification/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function createNotification(token, data, success, error) {
    axios
        .post(`${BASE_URL}/notification`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function updateNotification(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/notification/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
    