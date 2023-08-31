import { Movie } from "../models/Movie";
import "bootstrap/dist/css/bootstrap.css";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <p className="lead">Director: {movie.director}</p>
      <p className="lead">Release Year: {movie.releaseYear}</p>
      <p className="lead">Genre: {movie.genre.map(g => g + " ")}</p>
      <p className="lead">Rating: {movie.rating}</p>
    </div>
  );
};
