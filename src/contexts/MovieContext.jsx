import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  const [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    
    if (storedFavs) {
      
      setfavorites(JSON.parse(storedFavs));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addtofavorites = (movie) => {
    setfavorites((prev) => [...prev, movie]);
  };

  const removefromfavroites = (movieid) => {
    setfavorites((prev) => prev.filter((m) => m.id !== movieid));
  };

  const isfavorite = (movieid) => {
    return favorites.some((m) => m.id === movieid);
  }

  const values = {
    favorites,
    addtofavorites,
    removefromfavroites,
    isfavorite
  }

  return <MovieContext.Provider value={values}>
    {children}
  </MovieContext.Provider>
}