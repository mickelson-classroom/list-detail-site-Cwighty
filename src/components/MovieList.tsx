import { useState } from "react"
import { MovieCard } from "./MovieCard";
import { Movie } from "../models/Movie";
import { MovieFilter } from "./MovieFilter";

export const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            releaseYear: 1994,
            genre: ["Drama"],
            rating: 9.3,
        },
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            releaseYear: 1972,
            genre: ["Crime", "Drama"],
            rating: 9.2,
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            releaseYear: 2008,
            genre: ["Action", "Crime", "Drama"],
            rating: 9.0,
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [filter, setFilter] = useState("");

    const handleDelete = (index: number) => {
        const newMovies = [...movies];
        newMovies.splice(index, 1);
        setMovies(newMovies);
    };

    const handleSelect = (movie: Movie) => {
        setSelectedMovie(movie);
      };
      
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Movies</h1>
            <MovieFilter filter={filter} setFilter={setFilter} />
            {filteredMovies.map((movie, index) => (
                <MovieCard
                    key={index}
                    movie={movie} 
                    onDelete={() => handleDelete(index)}
                    onSelect={handleSelect}
                    isSelected={selectedMovie === movie}
                />
            ))}
        </div>
    );
};




