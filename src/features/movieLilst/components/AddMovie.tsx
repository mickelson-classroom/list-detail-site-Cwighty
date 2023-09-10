import React, { useState, FormEvent } from "react";
import { Movie } from "../../../models/Movie";
import { TextInput } from "../../../components/TextInput";
import { NumberInput } from "../../../components/NumberInput";

export const AddMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  const defaultMovie: Movie = {
    id: 1,
    title: "",
    director: "",
    releaseYear: new Date().getFullYear(),
    genres: [],
    rating: 5,
  };

  const [newMovie, setNewMovie] = useState<Movie>(defaultMovie);
  const [validated, setValidated] = useState<boolean>(false);

  const validationRules: {
    [key in keyof Movie]: ((value: any) => string | null)[];
  } = {
    id: [],
    title: [
      (value: string) => (value.length >= 1 ? null : "Title is required"),
    ],
    director: [
      (value: string) => (value.length >= 1 ? null : "Director is required"),
    ],
    releaseYear: [
      (value: number) =>
        value >= 1900 && value <= new Date().getFullYear()
          ? null
          : "Invalid release year",
    ],
    rating: [
      (value: number) =>
        value >= 1 && value <= 10 ? null : "Rating must be between 1 and 10",
    ],
    genres: [],
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidated(true);

    const form = e.currentTarget as HTMLFormElement;
    let formIsValid = true;

    if (formIsValid) {
      onAdd(newMovie);
      setNewMovie(defaultMovie);
      setValidated(false);
    }
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
              <form
                className={`needs-validation ${
                  validated ? "was-validated" : ""
                }`}
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <TextInput
                    label="Title"
                    value={newMovie.title}
                    onChange={(value: string) =>
                      setNewMovie({ ...newMovie, title: value })
                    }
                    rules={validationRules.title}
                  />
                  <TextInput
                    label="Director"
                    value={newMovie.director}
                    onChange={(value: string) =>
                      setNewMovie({ ...newMovie, director: value })
                    }
                    rules={validationRules.director}
                  />

                  <NumberInput
                    label="Release Year"
                    value={newMovie.releaseYear}
                    onChange={(value: number) =>
                      setNewMovie({ ...newMovie, releaseYear: value })
                    }
                    rules={validationRules.releaseYear}
                  />
                </div>

                <div className="col-lg-6">
                  <NumberInput
                    label="Rating"
                    value={newMovie.rating}
                    onChange={(value: number) =>
                      setNewMovie({ ...newMovie, rating: value })
                    }
                    rules={validationRules.rating}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Movie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
