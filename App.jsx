import React, { useState, useEffect } from "react";
import Search from "./components/Search.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Login from "./Login.jsx";
import Favourites from "./Favourites.jsx"; 
import moviesData from "./movies.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [view, setView] = useState("home"); 
  useEffect(() => {
    try {
      const moviesWithLikes = moviesData.movies.map((movie) => ({
        ...movie,
        liked: false,
      }));
      setMovies(moviesWithLikes);
    } catch (error) {
      console.error(`Error loading movies: ${error}`);
      setErrorMessage("Error loading movies. Please try again later.");
    }
  }, []);

  const toggleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  return (
    <MainContent
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      movies={movies}
      toggleLike={toggleLike}
      errorMessage={errorMessage}
      view={view}
      setView={setView}
    />
  );
};

const MainContent = ({
  searchTerm,
  setSearchTerm,
  movies,
  toggleLike,
  errorMessage,
  view,
  setView,
}) => {
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <nav className="flex justify-between items-center  py-4 bg-black shadow-md w-full absolute top-0 left-0">
          <div className="flex items-center gap-2">
            <img src="./logo.png" className="h-12 w-auto" alt="Logo" />
          </div>
          <ul className="flex space-x-6">
          <li>
              <button onClick={() => setView("login")} className="text-white hover:bg-dark-100 p-3 rounded-lg transition duration-200">
                Login
              </button>
          </li>

          <li>
              <button onClick={() => setView("home")} className="text-white hover:bg-dark-100 p-3 rounded-lg transition duration-200">
                Home
              </button>
          </li>
           
          <li>
              <button onClick={() => setView("favourites")} className="text-white hover:bg-dark-100 p-3 rounded-lg transition duration-200">
                Favourites 
              </button>
          </li>
          </ul>
        </nav>

        {view === "login" && <Login />}
        {view === "favourites" && <Favourites movies={movies} toggleLike={toggleLike} />}
        {view === "home" && (
          <>
            <header className="text-center py-12">
              <img src="./hero.png" alt="Hero Banner" className="mx-auto w-1/2 mb-6" />
              <h1 className="text-4xl font-extrabold">Go ahead, stream free</h1>
              <p className="text-lg text-gray-300 mt-2">
                With CineSync you can watch movies from all over the world. So what are you waiting for?
              </p>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>

            <section className="all-movies">
              <h2 className="text-2xl font-bold mt-10 mb-4">All Movies</h2>
              {errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} toggleLike={toggleLike} />
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default App;
