import React, { useEffect, useRef } from "react";
import useAppContext from "../Hooks/useAppContext";

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const searchValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchItem = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchItem}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
