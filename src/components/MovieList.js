import React from "react";
// import Modal from "./Modal";

const MovieList = ({
  movies,
  show,
  setShow,
  movieId,
  setMovieId,
  getMovieInfo,
}) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div key={index} className="image-container">
          <img src={movie.Poster} alt="movie-poster" />

          <footer>
            <div className="movie-info">
              <h4> {movie.Title} </h4>
            </div>
            <p>
              <button
                className="btn-see-more"
                key={movie.imdbID}
                onClick={() => {
                  setShow(true);
                  getMovieInfo(movie.imdbID);
                  console.log(movie.Title);
                }}
              >
                More Info
              </button>
            </p>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
