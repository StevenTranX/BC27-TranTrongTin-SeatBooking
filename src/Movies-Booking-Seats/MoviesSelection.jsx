import React from 'react';

const MoviesSelection = () => {
  return (
    <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value={80}>Parasite (80.000vnd)</option>
        <option value={100}>Joker (100.000vnd)</option>
        <option value={70}>Jumanji: Next Level (70.000vnd)</option>
        <option value={70}>Dolittle (₹70.000)</option>
      </select>
    </div>
  );
};
export default MoviesSelection;
