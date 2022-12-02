import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    props.show && (
      <div className="module">
        <div className="modal-container">
          <div className="modal-header">
            <header>
              <h2 className="modal-title">{props.movieInfo.Title}</h2>
              <div className="modal-genre-info">
                <p> {props.movieInfo.Year} </p>
                <p> {props.movieInfo.Rated} </p>
                <p> {props.movieInfo.Runtime} </p>
                <p> {props.movieInfo.Language} </p>
              </div>
              <div className="ratings">
                {props.movieInfo.Ratings &&
                  props.movieInfo.Ratings.map((rating) => (
                    <p
                      key={rating.Source}
                    >{`${rating.Source}: ${rating.Value}`}</p>
                  ))}
                <button className="button" onClick={() => props.setShow(false)}>
                  Close
                </button>
              </div>
            </header>
          </div>
          <div className="poster-container">
            <img src={props.movieInfo.Poster} alt="/" />
          </div>
          <div className="modal-body">
            <div className="modal-body-left">
              <div className="genre">Genre: {props.movieInfo.Genre}</div>
              <div className="genre">Writer: {props.movieInfo.Writer}</div>
              <div className="genre">Director: {props.movieInfo.Director}</div>
            </div>
            <div className="modal-body-right ">
              <h3>Plot:</h3> {props.movieInfo.Plot}
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    )
  );
};

export default Modal;
