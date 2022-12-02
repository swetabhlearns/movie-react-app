import React from "react";

const Pagination = ({ postsPerPage, totalPosts, page, setPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const getPrevPage = () => {
    setPage(page - 1);
  };
  const getNextPage = () => {
    setPage(page + 1);
  };

  return (
    <nav className="pagination">
      {pageNumbers.length > 0 ? (
        <div className="button-container">
          <button
            className="next-btn"
            disabled={page === 1 ? true : false}
            onClick={getPrevPage}
          >
            PREV
          </button>
          <p>
            {" "}
            {page} of {pageNumbers.length}{" "}
          </p>
          <button
            className="next-btn"
            disabled={page === pageNumbers.length ? true : false}
            onClick={getNextPage}
          >
            NEXT
          </button>
        </div>
      ) : (
        <h1></h1>
      )}
    </nav>
  );
};

export default Pagination;
