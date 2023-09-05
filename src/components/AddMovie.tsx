import React, { useState } from "react";
import { Movie } from "../models/Movie";

export const AddMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  const defaultMovie = {
    title: "",
    director: "",
    releaseYear: new Date().getFullYear(),
    genre: [],
    rating: 5,
  } as Movie;

  const [newMovie, setNewMovie] = useState(defaultMovie);

  const handleNewMovie = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (newMovie.title.trim() === "") {
      return;
    }
    onAdd(newMovie);
    setNewMovie(defaultMovie);
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                value={newMovie.title}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, title: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input
                type="text"
                className="form-control"
                id="director"
                placeholder="Enter director"
                value={newMovie.director}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, director: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="releaseYear">Release Year</label>
              <input
                type="number"
                className="form-control"
                id="releaseYear"
                placeholder="Enter release year"
                value={newMovie.releaseYear}
                onChange={(e) =>
                  setNewMovie({
                    ...newMovie,
                    releaseYear: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                className="form-control"
                id="genre"
                placeholder="Enter genre"
                value={newMovie.genre.join(", ")}
                onChange={(e) =>
                  setNewMovie({
                    ...newMovie,
                    genre: e.target.value.split(", "),
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                placeholder="Enter rating"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie({
                    ...newMovie,
                    rating: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </div>

        <button className="btn btn-primary my-2" onClick={handleNewMovie}>
          Add Movie
        </button>
      </form>
    </div>
  );
};
