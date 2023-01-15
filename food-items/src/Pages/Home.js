import React from "react";
import ItemList from "../Components/ItemList";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <ItemList />
    </main>
  );
};

export default Home;
