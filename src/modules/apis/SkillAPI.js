import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

let getTokenHeader = (token) => {
    return {headers:{Authorization: `Bearer ${token}`}};
}

export function getAllSkill(token, success, error) {
    axios
        .get(`${BASE_URL}/skill`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function getSkill(token, id, success, error) {
    axios
        .get(`${BASE_URL}/skill/${id}`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function deleteSkill(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/skill/${id}`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function createSkill(token, data, success, error) {
    axios
        .post(`${BASE_URL}/skill`, data, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function updateSkill(token, data, success, error) {
    axios
        .patch(`${BASE_URL}/skill/${data.id}`, data, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

