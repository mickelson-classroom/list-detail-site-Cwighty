import React, { useState } from 'react'
import { Movie } from '../models/Movie'

export const AddGenreModal = ( { selectedMovie, movies, setMovies } : { selectedMovie : Movie | null, movies: Movie[], setMovies : (movies:Movie[]) => void} ) => {
  const [newGenre, setNewGenre] = useState<string>("")
  const handleAdd = () => {
    if (newGenre.trim() === "") {
      return;
    };
    if (selectedMovie) {
      const newMovies = [...movies];
      const index = newMovies.findIndex((m) => m.title === selectedMovie.title);
      newMovies[index].genre.push(newGenre);
      setMovies(newMovies);
    }
    setNewGenre("");
  }

  return (
    <div className="modal fade" tabIndex={-1} id="addGenreModal" role="dialog" aria-labelledby="addGenreModal" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add Genre</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
            <form className="form-inline">
              <label className="sr-only" htmlFor="genre">Genre</label>
              <input type="text" className="form-control mb-2 mr-sm-2" id="genre" placeholder="Genre" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} />
              </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleAdd} data-dismiss="modal">Add Genre</button>
      </div>
    </div>
  </div>
</div>
  )
}
