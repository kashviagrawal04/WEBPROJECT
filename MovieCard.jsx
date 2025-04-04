import React from 'react';

const MovieCard = ({ movie: { id, title, rating, poster_url, release_year, language, liked, videoUrl }, toggleLike }) => {
  const handleCardClick = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank'); // Open video in new tab
    }
  };

  return (
    <div 
      className="movie-card relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleCardClick}
    >
      <img 
        src={poster_url} 
        alt={`Poster of ${title}`} 
        className="w-full h-auto rounded-lg"
      />
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click from triggering when clicking the like button
          toggleLike(id);
        }}
        className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded-full transition-transform hover:scale-110"
        aria-label={liked ? `Unlike ${title}` : `Like ${title}`}
      >
        {liked ? '❤️' : '🤍'}
      </button>
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">⭐ {rating} | {release_year}</p>
        <p className="text-gray-500">{language}</p>
      </div>
    </div>
  );
};

export default MovieCard;
