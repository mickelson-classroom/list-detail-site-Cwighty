import { useEffect, useState } from "react";
import {
  Movie,
  movieValidationRules,
  validateField,
} from "../../../models/Movie";
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
    for (const key of Object.keys(editedMovie) as (keyof Movie)[]) {
      if (
        validateField(editedMovie[key], movieValidationRules[key]).length > 0
      ) {
        return;
      }
    }

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

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMovie(movie);
  };

  if (isEditing)
    return (
      <div>
        <div className="row justify-content-end text-right">
          <div className="col-auto">
            <button
              className="btn btn-outline-secondary bi bi-x-lg"
              onClick={handleCancelEdit}
            />
          </div>
          <div className="col-auto">
            <button
              className="btn btn-outline-success bi bi-check-lg"
              onClick={() => handleSaveEdit()}
            />
          </div>
        </div>
        <TextInput
          label={"Title"}
          value={editedMovie.title}
          onChange={(value) => setEditedMovie({ ...editedMovie, title: value })}
          rules={movieValidationRules.title}
        />
        <TextInput
          label={"Director"}
          value={editedMovie.director}
          onChange={(value) => setEditedMovie({ ...editedMovie, director: value })}
          rules={movieValidationRules.director}
        />
        <NumberInput
          label={"Release Year"}
          value={editedMovie.releaseYear}
          onChange={(value) => setEditedMovie({ ...editedMovie, releaseYear: value })}
          rules={movieValidationRules.releaseYear}
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
          onChange={(value) => setEditedMovie({ ...editedMovie, rating: value })}
          rules={movieValidationRules.rating}
        />
        <NumberInput
          label={"Runtime (Minutes)"}
          value={editedMovie.runTimeMin}
          onChange={(value) => setEditedMovie({ ...movie, runTimeMin: value })}
          rules={movieValidationRules.runTimeMin}
        />
      </div>
    );

  return (
    <div>
      <div className="row justify-content-between me-1">
        <div className="col-auto">
          <h3>{movie.title}</h3>
        </div>
        <div className="col-2 col-sm-2 col-md-1">
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="lead">Rating: {movie.rating}</p>
      <p className="lead">Runtime: {movie.runTimeMin} minutes</p>
    </div>
  );
};
