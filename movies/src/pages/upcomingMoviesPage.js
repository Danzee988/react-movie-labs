import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateUpcomingMoviesList'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  useEffect(() => {
    getUpcomingMovies().then(movies => {
      console.log("Upcoming Movies Data:", movies); // Log the fetched data
      setUpcomingMovies(movies);
    })
    .catch((error) => {
      console.error("Error fetching upcoming movies:", error); // Log any errors
    });
  }, []);

  console.log("Upcoming Movies State:", upcomingMovies); // Log the state

  return (
    <PageTemplate
    title="Upcoming Movies"
    movies={upcomingMovies}
    />
  );
};
export default UpcomingMoviesPage;