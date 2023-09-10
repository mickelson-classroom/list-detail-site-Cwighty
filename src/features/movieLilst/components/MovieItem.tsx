import React, { useState } from "react";
import { Movie } from "../../../models/Movie";

export const MovieItem = ({
  movie,
  onDelete,
  onSelect,
  isSelected,
}: {
  movie: Movie;
  onDelete: () => void;
  onSelect: (movie: Movie) => void;
  isSelected: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = () => {
    onSelect(movie);
  };

  return (
    <div
      className={`card me-3 my-2 ${isSelected ? "border-primary" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleSelect}
    >
      <div className="card-body d-flex justify-content-between">
        <h5 className="card-title">{movie.title}</h5>
        <button
          className="my-auto btn btn-sm btn-close"
          onClick={onDelete}
        ></button>
      </div>
    </div>
  );
};
