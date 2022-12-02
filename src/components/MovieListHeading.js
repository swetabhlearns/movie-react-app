import React from "react";

const MovieListHeading = (props) => {
  const headingClickHandler = () => {
    window.location.reload();
  };
  return (
    <div className="col">
      <h1 onClick={headingClickHandler}>{props.heading}</h1>
      <a href="#"></a>
    </div>
  );
};

export default MovieListHeading;
