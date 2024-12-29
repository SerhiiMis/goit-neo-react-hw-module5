import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM5ZWQzMWY3ODBlYjdhZTM0ZWM5MzRiMjNjOTBmMCIsIm5iZiI6MTczNTQ5ODI2OC43MjcsInN1YiI6IjY3NzE5YTFjN2QxYmM4N2RlNzYxNzg5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z1mNQC7u7uhRf4YZ5jm5_gV2zVQigxEaSuCNNF5uU6k";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: API_TOKEN },
});

export const fetchPopularMovies = async () => {
  const response = await axiosInstance.get(
    "/movie/popular?language=en-US&page=1"
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axiosInstance.get(
    `/search/movie?query=${query}&language=en-US&page=1`
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}?language=en-US`);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};