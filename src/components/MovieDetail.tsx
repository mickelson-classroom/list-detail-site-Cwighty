import { Movie } from "../models/Movie";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p className="lead">Director: {movie.director}</p>
      <p className="lead">Release Year: {movie.releaseYear}</p>
      <div className="d-flex flex-wrap">
        {movie.genre.map((g) => (
          <div className="card m-1 bg-secondary text-light" key={g}>
            <div className="card-body">
              <p className="card-text">{g}</p>
            </div>
          </div>
        ))}
        <button className="btn btn-sm btn-success m-auto" data-toggle="modal" data-target="#addGenreModal">+ Genre</button>
      </div>
      <p className="lead">Rating: {movie.rating}</p>
    </div>
  );
};
