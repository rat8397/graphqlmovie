import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovie = (limit, rating) => {
  let REQUEST_URL = API_URL;

  if (limit > 0) {
    REQUEST_URL = REQUEST_URL + `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL = REQUEST_URL + `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL).then((response) => {
    return response.json().then((json) => {
      // json -> json 파일을 의미함.
      return json.data.movies;
    });
  });
};
