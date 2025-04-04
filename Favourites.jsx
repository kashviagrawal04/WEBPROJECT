import React from "react";
import MovieCard from "./components/MovieCard.jsx";

const Favourites = ({ movies, toggleLike }) => {
  const likedMovies = movies.filter((movie) => movie.liked);

  return (
    <section className="px-8">
      <h2 className="text-2xl font-bold mt-10 mb-4 opacity-0">Liked Movies </h2>
      {likedMovies.length === 0 ? (
        <p className="text-gray-400">You haven't liked any movies yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} toggleLike={toggleLike} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Favourites;
