import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}
export function getAllSpeaker(token, success, error) {
  axios
    .get(`${BASE_URL}/speaker`, getTokenHeader(token))
    .then((response) => {
    if (success) success(response.data);
    })
    .catch((err) => {
    if (error) error(err.response.data);
    });
}
export function getSpeaker(token, id, success, error) {
    axios
        .get(`${BASE_URL}/speaker/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function deleteSpeaker(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/speaker/${id}`, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function createSpeaker(token, data, success, error) {
    axios
        .post(`${BASE_URL}/speaker`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }
export function updateSpeaker(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/speaker/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
        if (success) success(response.data);
        })
        .catch((err) => {
        if (error) error(err.response.data);
        });
    }