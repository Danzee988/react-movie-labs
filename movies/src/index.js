import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import './homePage.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="navbar">
        <nav>
        <div className="header-content">
          <span className="text1">TMDB Client </span>
          <span className="text2">All you ever wanted to know about Movies!</span>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/movies/favorites">FAVOURITE</Link>
              </li>
              <li>
              <Link to="/movies/upcoming">UPCOMING</Link>
              </li>
            </ul>
            </div>
          </nav>
      </header>
      <Routes>
        <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);