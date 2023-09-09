import React from "react";

export const GenreSelector = ({
  onGenreSelected,
  addedGenres,
}: {
  onGenreSelected: (genre: string) => void;
  addedGenres: string[];
}) => {
  const genreOptions = [
    "Drama",
    "Action",
    "Adventure",
    "Fantasy",
    "Dark",
    "Crime",
  ];

  const filteredGenreOptions = genreOptions.filter(
    (g) => !addedGenres.includes(g)
  );

  const Accordion = () => {
    return (
      <div className="accordion" id="genreAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="genreHeader">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#genreCollapse"
              aria-expanded="false"
              aria-controls="genreCollapse"
            >
              Add Genres
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
                {filteredGenreOptions.length === 0 && (
                  <em>No more genres to add</em>
                )}
                {filteredGenreOptions.map((genre) => (
                  <div className="card m-1 bg-secondary text-light" key={genre}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-auto">
                          <p className="card-text my-auto">{genre}</p>
                        </div>
                        <div className="col-1">
                          <button
                            className="btn btn-sm bi bi-plus fs-5 p-0"
                            onClick={() => onGenreSelected(genre)}
                          ></button>
                        </div>
                      </div>
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
  return <Accordion />;
};
