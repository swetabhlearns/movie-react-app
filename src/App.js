import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import "./App.css";
const App = () => {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [postsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState("");
  const [page, setPage] = useState(1);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=dc0e9629&page=${page}`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setTotalPosts(responseJson.totalResults);
    }
  };
  const getMovieInfo = async (movieId) => {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=dc0e9629`;

    const response = await fetch(url);

    const responseJson = await response.json();

    if (responseJson) {
      setMovieInfo(responseJson);
      console.log(responseJson, movieId);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue, page]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4 position-relative">
        <MovieListHeading heading="F Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      {/* <div className="home-display">
        <div className="home-display-container">
          <MovieListHeading heading="F Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div> */}
      <div>
        <MovieList
          movies={movies}
          show={show}
          setShow={setShow}
          getMovieInfo={getMovieInfo}
        />
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        page={page}
        setPage={setPage}
      />
      {show && <Modal show={show} setShow={setShow} movieInfo={movieInfo} />}
    </div>
  );
};

export default App;
