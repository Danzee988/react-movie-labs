import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] );
  const [myReviews, setMyReviews] = useState( {} );
  const [watchList, setWatchList] = useState([]);
  const [mustWatchList, setMustWatchList] = useState([]);



  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
    localStorage.setItem('watchList', JSON.stringify(watchList));
 };

 const addToMustWatchList = (movieId) => {
  if (!mustWatchList.includes(movieId)) {
    setMustWatchList((prevList) => [...prevList, movieId]);
  }
};
  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        watchList,
        addToWatchList,
        mustWatchList,
        addToMustWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;