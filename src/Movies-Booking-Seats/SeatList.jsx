import React from 'react';
import { useSelector } from 'react-redux';
// import './css/MoviesBooking.css';
import SeatItem from './SeatItem';
import movieScreen from './Images/screen-thumb.png';
const SeatList = () => {
  return (
    <div
      className="container w-75 movie-container"
      style={{ marginRight: '100px' }}
    >
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="movie-screen">
        <img src={movieScreen} alt="screen" />
      </div>
      <div className="row-container">
        <SeatItem />
        <h5 className="subtitle">DIAMOND - ₹850</h5>
      </div>
    </div>
  );
};

export default SeatList;
