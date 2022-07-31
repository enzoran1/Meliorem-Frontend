import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}

export function getAllQuizPart(token, success, error) {
    axios
        .get(`${BASE_URL}/quiz-part`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function getQuizPart(token, id, success, error) {
    axios
        .get(`${BASE_URL}/quiz-part/${id}`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function deleteQuizPart(token, id, success, error) {
    axios
        .delete(`${BASE_URL}/quiz-part/${id}`, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function createQuizPart(token, quizPart, success, error) {
    axios
        .post(`${BASE_URL}/quiz-part`, quizPart, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}

export function updateQuizPart(token, quizPart, success, error) {
    axios
        .patch(`${BASE_URL}/quiz-part/${quizPart.id}`, quizPart, getTokenHeader(token))
        .then((response) => {
            if (success) success(response.data);
        })
        .catch((err) => {
            if (error) error(err.response.data);
        });
}
