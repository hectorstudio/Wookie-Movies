import { useEffect, useMemo } from "react";
import Rating from "react-stars";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMoviesByQuery } from "../../redux/moviesSlice";
import { RootState } from "../../redux/store";

const MovieDetail = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();

  const { query, movies } = useAppSelector((state: RootState) => state.movies);

  const movie = useMemo(() => {
    return movies.find((m) => m.slug === slug);
  }, [slug, movies]);

  useEffect(() => {
    if (movies.length < 1) {
      dispatch(fetchMoviesByQuery(query));
    }
  }, []);

  if (!movie) {
    return <div className="text-center">Loading</div>;
  }

  return (
    <div className="p-5 flex">
      <img src={movie.poster} alt="poster" />
      <div className="flex flex-col w-full ml-5 text-xl">
        <div className="flex justify-between">
          <h2 className="font-bold text-3xl">
            {movie.title} ({movie.imdb_rating})
          </h2>
          <Rating
            count={5}
            value={movie.imdb_rating / 2}
            size={24}
            color2={"#ffd700"}
          />
        </div>
        <p className="mt-2">
          <strong>
            {new Date(movie.released_on).getFullYear()} | {movie.length} |{" "}
            {movie.director}
          </strong>
        </p>
        <p className="mt-2">
          <strong>Cast:</strong> {movie.cast.join(", ")}
        </p>
        <p className="mt-2">
          <strong>Movie Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
