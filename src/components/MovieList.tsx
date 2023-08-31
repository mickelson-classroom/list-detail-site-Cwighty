import React, { useState } from "react";
import { Movie } from "../models/Movie";
import "bootstrap/dist/css/bootstrap.css";
import { MovieFilter } from "./MovieFilter";
import { AddMovie } from "./AddMovie";
import { MovieItem } from "./MovieItem";
import { MovieDetail } from "./MovieDetail";

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
  const [filter, setFilter] = useState("");

  const handleDelete = (index: number) => {
    const newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  };

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const filteredMovies = movies.filter((movie) =>
  movie.title?.toLowerCase().includes(filter?.toLowerCase()) ||
  movie.director?.toLowerCase().includes(filter?.toLowerCase()) ||
  movie.genre.some((genre) => genre.toLowerCase().includes(filter?.toLowerCase()))
);

  return (
    <div className="container">
      <h1 className="mt-4">Movies</h1>
      <div className="row">
        <div className="col-md-6">
          <MovieFilter filter={filter} setFilter={setFilter} />
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
        <div className="col-md-6">
          {selectedMovie && filteredMovies.includes(selectedMovie) ? (
            <MovieDetail movie={selectedMovie} />
          ) : (
            <p>No movie selected</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <AddMovie onAdd={(movie) => setMovies([...movies, movie])} />
        </div>
      </div>
    </div>
  );
};