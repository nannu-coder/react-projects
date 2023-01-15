import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [loading, setLoading] = useState(true);
  const [listItem, setListItem] = useState([]);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setListItem(newCocktails);
      } else {
        setListItem([]);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ setSearchTerm, loading, listItem }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
