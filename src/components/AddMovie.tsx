import React, { useState } from 'react'
import { Movie } from '../models/Movie';
import { on } from 'events';
import { error } from 'console';

export const AddMovie = ({onAdd}: {onAdd: (movie : Movie) => void}) => {
    const [newMovie, setNewMovie] = useState({ title: "", director: "", releaseYear: 0, genre: [], rating: 0} as Movie);
    const [errors, setErrors] = useState<string[]>([]);

    const handleNewMovie = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        validate();
        if(errors.length > 0) return;
        onAdd(newMovie);
        setNewMovie({ title: "", director: "", releaseYear: 0, genre: [], rating: 0});
    }

    const validate = () => {
        const errors = [];
        if(!newMovie.title) errors.push("Title is required");
        if(!newMovie.director) errors.push("Director is required");
        if(!newMovie.releaseYear) errors.push("Release Year is required");
        if(!newMovie.genre) errors.push("Genre is required");
        if(!newMovie.rating) errors.push("Rating is required");
        setErrors(errors);
        return errors.length === 0;
    }

  return (
      <div>
          <h1>Add Movie</h1>
          <form>
              <label>Title</label>
              <input type="text" onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
              <label>Director</label>
              <input type="text" onChange={(e) => setNewMovie({ ...newMovie, director: e.target.value })} />
              <label>Rating</label>
              <input type="number" min={1} max={10} onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })} />
              <label>Release Year</label>
              <input type="text" onChange={(e) => setNewMovie({ ...newMovie, releaseYear: Number(e.target.value)})} />
              <label>Genre (Comma separate multiple genres)</label>
              <input type="text" onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value.split(',')})} />
              <button type="submit" onClick={(e) => { e.preventDefault(); onAdd(newMovie); setNewMovie({} as Movie) }}>Add</button>
          </form>
            <ul>
                {errors.map((error) => (
                    <li>{error}</li>
                ))}
            </ul>
    </div>
  )
}
