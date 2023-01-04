import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import getCocktails from '../services/getCocktails';

const initialValue = {
  loading: false,
  cocktails: [],
  searchTerm: 'a',
  setSearchTerm: (term: string) => {},
};
const AppContext = React.createContext(initialValue);

const AppProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getCocktails(searchTerm);
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item: any) => {
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
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
