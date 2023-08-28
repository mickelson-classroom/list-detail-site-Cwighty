import { useState } from "react";
import { Movie } from "../models/Movie";

export const MovieCard = ({
    movie,
    onDelete,
    onSelect,
    isSelected,
}: {
    movie : Movie, 
    onDelete : () => void,
    onSelect: (movie: Movie) => void,
    isSelected: boolean,
} ) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleSelect = () => {
        onSelect(movie);
    };


    return (
        <div
        style={{
            border: isSelected ? "2px solid blue" : isHovered ? "2px solid gray" : "2px solid white",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleSelect}
        >
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Genre: {movie.genre.join(", ")}</p>
            <p>Rating: {movie.rating}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};