import React, { useState } from "react";
import { Movie } from "../models/Movie";

export const AddMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    releaseYear: 0,
    genre: [],
    rating: 0,
  } as Movie);

  const handleNewMovie = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (newMovie.title.trim() === "") {
      return; 
    }
    onAdd(newMovie);
    setNewMovie({
      title: "",
      director: "",
      releaseYear: 0,
      genre: [],
      rating: 0,
    } as Movie);
  };

  return (
    <div>
      <h3>Add Movie</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <input
            type="text"
            className="form-control"
            id="director"
            value={newMovie.director}
            onChange={(e) =>
              setNewMovie({ ...newMovie, director: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseYear" className="form-label">
            Release Year
          </label>
          <input
            type="number"
            className="form-control"
            id="releaseYear"
            value={newMovie.releaseYear}
            onChange={(e) =>
              setNewMovie({ ...newMovie, releaseYear: +e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={newMovie.genre.join(", ")}
            onChange={(e) =>
              setNewMovie({ ...newMovie, genre: e.target.value.split(", ") })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: +e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={handleNewMovie}>
          Add Movie
        </button>
      </form>
    </div>
  );
};