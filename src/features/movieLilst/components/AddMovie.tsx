import React, { useState, FormEvent, useRef, useEffect } from "react";
import {
  Movie,
  movieValidationRules,
  theatreTypeOptions,
  validateField,
} from "../../../models/Movie";
import { TextInput } from "../../../components/TextInput";
import { NumberInput } from "../../../components/NumberInput";
import { OptionInput } from "../../../components/OptionInput";

export const AddMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  const defaultMovie: Movie = {
    id: 1,
    title: "",
    director: "",
    releaseYear: new Date().getFullYear(),
    genres: [],
    rating: 5,
    runTimeMin: 60,
    theatreType: "2D",
  };

  const [newMovie, setNewMovie] = useState<Movie>(defaultMovie);
  const [validated, setValidated] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidated(true);

    for (const key of Object.keys(newMovie) as (keyof Movie)[]) {
      if (validateField(newMovie[key], movieValidationRules[key]).length > 0) {
        setValidated(false);
        return;
      }
    }

    onAdd(newMovie);
    setNewMovie(defaultMovie);
    setValidated(false);
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
                    rules={movieValidationRules.title}
                  />
                  <TextInput
                    label="Director"
                    value={newMovie.director}
                    onChange={(value: string) =>
                      setNewMovie({ ...newMovie, director: value })
                    }
                    rules={movieValidationRules.director}
                  />

                  <NumberInput
                    label="Release Year"
                    value={newMovie.releaseYear}
                    onChange={(value: number) =>
                      setNewMovie({ ...newMovie, releaseYear: value })
                    }
                    rules={movieValidationRules.releaseYear}
                  />
                </div>

                <NumberInput
                  label="Rating"
                  value={newMovie.rating}
                  onChange={(value: number) =>
                    setNewMovie({ ...newMovie, rating: value })
                  }
                  rules={movieValidationRules.rating}
                />
                <NumberInput
                  label="Run Time (Minutes)"
                  value={newMovie.runTimeMin}
                  onChange={(value: number) =>
                    setNewMovie({ ...newMovie, runTimeMin: value })
                  }
                  rules={movieValidationRules.runTimeMin}
                />
                <OptionInput
                  options={theatreTypeOptions}
                  type={"select"}
                  label={"Theatre Type"}
                  value={newMovie.theatreType}
                  onChange={(value: string) => {
                    setNewMovie({ ...newMovie, theatreType: value });
                  }}
                />
                <div className="modal-footer">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
