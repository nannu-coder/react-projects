import React from "react";
import useAppContext from "../Hooks/useAppContext";

const SearchForm = () => {
  const { query, handleSearch } = useAppContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
