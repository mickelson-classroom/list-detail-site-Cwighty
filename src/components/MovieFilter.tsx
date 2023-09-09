import { Movie } from "../models/Movie";
import { useState } from "react";

export const MovieFilter = ({
  filter,
  setFilter,
  movies,
}: {
  filter: string;
  setFilter: (newValue: string) => void;
  movies: Movie[];
}) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const genreOptions = Array.from(new Set(movies.flatMap((m) => m.genres)));

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
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
    </div>
  );
};
