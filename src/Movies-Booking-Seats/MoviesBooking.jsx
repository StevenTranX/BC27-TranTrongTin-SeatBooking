import React from 'react';
// import './Scss/_moviesbooking.scss';
import movieScreen from './Images/screen-thumb.png';
import './css/MoviesBooking.css';
import MoviesSelection from './MoviesSelection';
import SeatList from './SeatList';
import SeatDetails from './SeatDetails';
const MoviesBooking = () => {
  return (
    <div>
      <MoviesSelection />
      <div className="d-flex justify-content-around">
        <SeatList />
        <SeatDetails />
      </div>
    </div>
  );
};

export default MoviesBooking;
