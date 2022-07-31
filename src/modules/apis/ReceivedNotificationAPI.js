import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}
export function getAllReceivedNotification(token, success, error) {
    axios
        .get(`${BASE_URL}/received-notification`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function getReceivedNotification(token, id, success, error) {
    axios
        .get(`${BASE_URL}/received-notification/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function deleteReceivedNotification(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/received-notification/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function createReceivedNotification(token, data, success, error) {
    axios
        .post(`${BASE_URL}/received-notification`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function updateReceivedNotification(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/received-notification/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
