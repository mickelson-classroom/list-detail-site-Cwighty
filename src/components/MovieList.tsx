import React, { useState } from "react";
import { Movie } from "../models/Movie";
import { MovieFilter } from "./MovieFilter";
import { AddMovie } from "./AddMovie";
import { MovieItem } from "./MovieItem";
import { MovieDetail } from "./MovieDetail";
import { AddGenreModal } from "./AddGenreModal";
import { MovieQuery } from "../models/MovieQuery";

export const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      genre: ["Drama"],
      rating: 9.3,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      genre: ["Crime", "Drama"],
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [filter, setFilter] = useState<MovieQuery>({ title: "", genres: [] });

  const handleDelete = (index: number) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title?.toLowerCase().includes(filter.title.toLowerCase()) ||
      movie.director
        ?.toLowerCase()
        .includes(filter?.title.toLowerCase() ?? "") ||
      (movie.genre.some((genre) => movie.genre.includes(genre)) &&
        console.log(movie.genre.some((genre) => movie.genre.includes(genre))))
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h1 className="">Movies</h1>
            <button
              className="btn btn-sm btn-success"
              data-bs-toggle="modal"
              data-bs-target="#addMovieModal"
            >
              + Movie
            </button>
          </div>
          <div className="col-md-12">
            <MovieFilter
              filter={filter}
              setFilter={setFilter}
              movies={movies}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {selectedMovie && filteredMovies.includes(selectedMovie) ? (
              <MovieDetail movie={selectedMovie} />
            ) : (
              <em>No movie selected</em>
            )}
          </div>
          <div className="col-md-6">
            {filteredMovies.length === 0 && <em className="m-2">No movies</em>}
            {filteredMovies.map((movie, index) => (
              <div className="row" key={index}>
                <MovieItem
                  movie={movie}
                  onDelete={() => handleDelete(index)}
                  onSelect={handleSelect}
                  isSelected={selectedMovie === movie}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <AddMovie onAdd={(movie) => setMovies([...movies, movie])} />
          </div>
        </div>
      </div>
      <AddGenreModal
        selectedMovie={selectedMovie}
        movies={movies}
        setMovies={setMovies}
      />
    </>
  );
};
