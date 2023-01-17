import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}&s=${query}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, error, loading, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
