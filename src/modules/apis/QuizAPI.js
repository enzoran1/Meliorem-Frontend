import axios from "axios";

const BASE_URL = "https://localhost:8000/api";

function getTokenHeader(token) {
  return {headers:{Authorization: `Bearer ${token}`}};
}


/**
 * @param {string} token
 * @param {function (object) } success
 * @param {function (object) } error
 *
 * get all the quizs from the server
 */
export function getAllQuiz(token, success, error) {
  axios
    .get(`${BASE_URL}/quiz`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {number} id
 * @param {function (object) } success
 * @param {function (object) } error
 *
 * get the quiz with the id from the server
 */
export function getQuiz(token, id, success, error) {
  axios
    .get(`${BASE_URL}/quiz/${id}`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {number} id
 * @param {function (object) } success
 * @param {function (object) } error
 *
 * delete the quiz with the id from the server
 */
export function deleteQuiz(token, id, success, error) {
  axios
    .delete(`${BASE_URL}/quiz/${id}`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {object} quiz
 * @param {function (object) } success
 * @param {function (object) } error
 * */
export function updateQuiz(token, id, quiz, success, error) {
  axios
    .patch(`${BASE_URL}/quiz/${id}`, quiz, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {object} quiz
 * @param {function (object) } success
 * @param {function (object) } error
 * */
export function createQuiz(token, quiz, success, error) {
  axios
    .post(`${BASE_URL}/quiz`, quiz, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

export function getQuizPartByQuizId(quizId,token, success, error) {
  axios
    .get(`${BASE_URL}/quiz/${quizId}/quiz-part`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}
