import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search with Movie Title ..."
        value={props.value}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
