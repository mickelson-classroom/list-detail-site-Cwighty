import { Movie } from "../models/Movie";
import { useState } from "react";

export const MovieFilter = ({
  filter,
  setFilter,
  movies
}: {
  filter: string;
  setFilter: (newValue: string) => void;
  movies: Movie[];
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const genreOptions = ["Action", "Comedy", "Drama", "Horror", "Romance"];

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value + " " + selectedGenres.join(" "));
  };

  const handleGenreChange = (genre: string) => {
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
                    style={{ width: "10rem", cursor: "pointer" }}
                    onClick={() => handleGenreChange(genre)}
                  >
                    <div className="card-body text-center text-white">
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
        value={filter}
        onChange={handleFilterChange}
      />
      <Accordion />
    </div>
  );
};
