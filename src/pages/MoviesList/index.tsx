import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMoviesByQuery } from "../../redux/moviesSlice";
import { RootState } from "../../redux/store";

const MoviesList = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { query, list, loading } = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchMoviesByQuery(query));
    }
  }, []);

  return <div>movies list</div>;
};

export default MoviesList;
