import React from 'react';

const MoviesSelection = () => {
  return (
    <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value={80}>Parasite (75.000vnd)</option>
        <option value={100}>Joker (75.000.000vnd)</option>
        <option value={70}>Terminator 2 : Judgement Day (75.000vnd)</option>
        <option value={70}>Bullet Train (75.000)</option>
      </select>
    </div>
  );
};
export default MoviesSelection;
