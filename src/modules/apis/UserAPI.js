import axios from "axios";

const BASE_URL = "https://localhost:8000/api";
const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

function getTokenHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

/**
 * @param {string} username
 * @param {string} password
 * @param {function (object) } success
 * @param {function (object) } error
 *
 * get the token from the server with the username and password
 */
export function login(username, password, success, error) {
  axios
    .post(
      `${BASE_URL}/login`,
      {
        username,
        password,
      },
      header
    )
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {function (object) } success
 * @param {function (object) } error
 *
 * get all the users from the server
 */
export function getAllUser(token, success, error) {
  console.log(token);
  axios
    .get(`${BASE_URL}/user`, getTokenHeader(token))
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
 * get the user with the id from the server
 */
export function getUser(token, id, success, error) {
  console.log(token);
  axios
    .get(`${BASE_URL}/user/${id}`, getTokenHeader(token))
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
 * delete the user with the id from the server
 */
export function deleteUser(token, id, success, error) {
  axios
    .delete(`${BASE_URL}/user/${id}`, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {object} user
 * @param {function (object) } success
 * @param {function (object) } error
 * */
export function updateUser(token, id, user, success, error) {
  axios
    .patch(`${BASE_URL}/user/${id}`, user, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}

/**
 * @param {string} token
 * @param {object} user
 * @param {function (object) } success
 * @param {function (object) } error
 * */
export function createUser(token, user, success, error) {
  axios
    .post(`${BASE_URL}/user`, user, getTokenHeader(token))
    .then((response) => {
      if (success) success(response.data);
    })
    .catch((err) => {
      if (error) error(err.response.data);
    });
}
