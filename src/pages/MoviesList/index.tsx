import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Movie from "../../components/Movie";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMoviesByQuery } from "../../redux/moviesSlice";
import { RootState } from "../../redux/store";

import 'swiper/css';

const MoviesList = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const { query, list, loading } = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchMoviesByQuery(query));
    }
  }, []);

  if (loading || !list) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="p-4 mb-2">
      {Object.keys(list).map((genre) => (
        <div className="block" key={genre}>
          <h2 className="text-2xl font-bold">{genre}</h2>
          <Swiper spaceBetween={50} slidesPerView={4.5}>
            {list[genre].map((movie) => (
              <SwiperSlide key={`${genre}-${movie.id}`}>
                <Movie movie={movie} onClick={() => navigate(`/movies/${movie.slug}`)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
