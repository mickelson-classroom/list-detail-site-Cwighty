import { Movie } from "../models/Movie";
import { useState } from "react";
import { MovieQuery } from "../models/MovieQuery";

export const MovieFilter = ({
  filter,
  setFilter,
  movies,
}: {
  filter: MovieQuery;
  setFilter: (newValue: MovieQuery) => void;
  movies: Movie[];
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const genreOptions = Array.from(new Set(movies.flatMap((m) => m.genre)));

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMovie: MovieQuery = {
      title: event.target.value,
      genres: selectedGenres,
    };
    setFilter(newMovie);
  };

  const handleGenreChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    genre: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const Accordion = () => {
    return (
      <div className="accordion" id="genreAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="genreHeader">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#genreCollapse"
              aria-expanded="true"
              aria-controls="genreCollapse"
            >
              Genres
            </button>
          </h2>
          <div
            id="genreCollapse"
            className="accordion-collapse collapse"
            aria-labelledby="genreHeader"
            data-bs-parent="#genreAccordion"
          >
            <div className="accordion-body">
              <div className="d-flex flex-wrap">
                {genreOptions.map((genre) => (
                  <div
                    key={genre}
                    className={`card me-3 mb-3 ${
                      selectedGenres.includes(genre) ? "bg-primary" : ""
                    }`}
                    onClick={(e) => handleGenreChange(e, genre)}
                  >
                    <div className="card-body text-center">
                      <h5 className="card-title">{genre}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search movies..."
        value={filter?.title}
        onChange={handleFilterChange}
      />
      <Accordion />
    </div>
  );
};
