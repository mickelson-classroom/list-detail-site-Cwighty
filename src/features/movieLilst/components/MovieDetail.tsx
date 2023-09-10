import { useEffect, useState } from "react";
import { Movie } from "../../../models/Movie";
import { GenreSelector } from "./GenreSelector";
import { TextInput } from "../../../components/TextInput";
import { NumberInput } from "../../../components/NumberInput";

export const MovieDetail = ({
  movie,
  onRemoveGenre,
  onGenreAdded,
  setMovies,
  movies,
}: {
  movie: Movie;
  onRemoveGenre: (genre: string) => void;
  onGenreAdded: (genre: string) => void;
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(movie);

  useEffect(() => {
    setEditedMovie(movie);
    setIsEditing(false);
  }, [movie]);

  const handleSaveEdit = () => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === editedMovie.id) {
        return { ...movie, ...editedMovie };
      } else {
        return movie;
      }
    });
    setMovies(updatedMovies);
    setIsEditing(false);
  };

  if (isEditing)
    return (
      <div>
        <div className="row justify-content-between me-1">
          <div className="col-auto">
            <TextInput
              label={"Title"}
              value={editedMovie.title}
              onChange={(value) => setEditedMovie({ ...movie, title: value })}
            />
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-6">
                <button
                  className="btn btn-outline-secondary bi bi-x-lg"
                  onClick={() => setIsEditing(false)}
                />
              </div>
              <div className="col-6">
                <button
                  className="btn btn-outline-success bi bi-check-lg"
                  onClick={() => handleSaveEdit()}
                />
              </div>
            </div>
          </div>
        </div>
        <TextInput
          label={"Director"}
          value={editedMovie.director}
          onChange={(value) => setEditedMovie({ ...movie, director: value })}
        />
        <NumberInput
          label={"Release Year"}
          value={editedMovie.releaseYear}
          onChange={(value) => setEditedMovie({ ...movie, releaseYear: value })}
        />
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
        <NumberInput
          label={"Rating"}
          value={editedMovie.rating}
          onChange={(value) => setEditedMovie({ ...movie, rating: value })}
        />
      </div>
    );
  return (
    <div>
      <div className="row justify-content-between me-1">
        <div className="col-auto">
          <h3>{movie.title}</h3>
        </div>
        <div className="col-1">
          <button
            className="btn btn-outline-info bi bi-pencil"
            onClick={() => setIsEditing(true)}
          />
        </div>
      </div>
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
