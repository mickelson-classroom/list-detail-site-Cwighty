import { Movie } from "../models/Movie";
import { GenreSelector } from "./GenreSelector";

export const MovieDetail = ({
  movie,
  onRemoveGenre,
  onGenreAdded,
}: {
  movie: Movie;
  onRemoveGenre: (genre: string) => void;
  onGenreAdded: (genre: string) => void;
}) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p className="lead">Director: {movie.director}</p>
      <p className="lead">Release Year: {movie.releaseYear}</p>
      <div className="d-flex flex-wrap">
        {movie.genres.map((g) => (
          <div className="card m-1 bg-primary text-light" key={g}>
            <div className="card-body">
              <div className="row">
                <div className="col-auto">
                  <p className="card-text">{g}</p>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-sm btn-close p-0"
                    onClick={() => onRemoveGenre(g)}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row my-2">
        <div className="col-12">
          <GenreSelector
            onGenreSelected={onGenreAdded}
            addedGenres={movie.genres}
          />
        </div>
      </div>
      <p className="lead">Rating: {movie.rating}</p>
    </div>
  );
};
