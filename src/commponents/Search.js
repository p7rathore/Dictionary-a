import React from "react";

const Search = ({ searchWords, setSearch ,error}) => {
  const cahnge = (event) => {
    setSearch(event.target.value);
  };


  
  return (
    <>
      <div className="search_baar">
        <input
          className="input"
          type="search"
          placeholder="Enter words..!"
          onChange={(e) => cahnge(e)}
        />
        <button className="btn" onClick={searchWords}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <p className="error">{error}</p>
    </>
  );
};

export default Search;
