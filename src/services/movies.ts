import { IMovie } from '../redux/moviesSlice';
import axios from './api';

export const fetchMovies = async (query: string): Promise<{ movies: IMovie[] }> => {
  return axios.get(`/movies?q=${query}`);
}
