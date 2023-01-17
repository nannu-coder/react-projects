import { createContext, useEffect, useReducer } from "react";
import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  SET_STORIES,
} from "../Components/action";
import Reducer from "../Components/Reducer";
const AppContext = createContext();

const api = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: false,
  query: "react",
  page: 0,
  hits: [],
  nbPages: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: SET_LOADING });

    try {
      const response = await fetch(
        `${api}query=${state.query}&page=${state.page}`
      );
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [state.query, state.page]);

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
