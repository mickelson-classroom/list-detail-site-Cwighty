import React, { useState } from "react";
import { Movie } from "../models/Movie";

export const AddMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  const defaultMovie = {
    title: "",
    director: "",
    releaseYear: new Date().getFullYear(),
    genres: [],
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
    <div
      className="modal fade"
      tabIndex={-1}
      id="addMovieModal"
      role="dialog"
      aria-labelledby="addMovieModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addMovieTitle">
              Add Movie
            </h5>
          </div>
          <div className="modal-body">
            <div>
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
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNewMovie}
              data-bs-dismiss="modal"
            >
              Add Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
