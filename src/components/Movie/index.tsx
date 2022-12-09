import { IMovie } from "../../redux/moviesSlice";

interface IProps {
  movie: IMovie;
  onClick: () => void;
}

const Movie = ({ movie, onClick }: IProps): JSX.Element => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img src={movie.poster} alt="poster" />
    </div>
  )
}

export default Movie;
