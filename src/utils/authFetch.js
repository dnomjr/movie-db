import axios from 'axios';

const productionUrl = 'https://api.themoviedb.org/3';

export const authFetch = axios.create({
  baseURL: productionUrl,
  method: 'GET',
  params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDZhZTZhMDBlNzM3NTg0NmE0Mzg1ZTYzNGE1MWYxZiIsInN1YiI6IjY1ZmM4ZWRlMGMxMjU1MDE2NTBhYTczNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PzUDZ3nVdlrm6QHJHx5b3IsB9U7qQm7tCpeh9Z_E8Nk',
  },
});
