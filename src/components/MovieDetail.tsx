import { Movie } from "../models/Movie";
import "bootstrap/dist/css/bootstrap.css";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p className="lead">Director: {movie.director}</p>
      <p className="lead">Release Year: {movie.releaseYear}</p>
      <p className="lead">Genre: {movie.genre.map((g) => g + " ")}</p>
      <p className="lead">Rating: {movie.rating}</p>
    </div>
  );
};
