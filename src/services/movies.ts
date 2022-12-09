import axios from './api';

export const fetchMovies = async (query: string): Promise<any> => {
  return axios.get(`/movies?q=${query}`);
}
