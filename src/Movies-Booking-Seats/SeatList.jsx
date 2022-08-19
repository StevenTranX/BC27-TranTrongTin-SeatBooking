import React from 'react';
import { useSelector } from 'react-redux';
// import './css/MoviesBooking.css';
import SeatItem from './SeatItem';
import movieScreen from './Images/screen-thumb.png';
const SeatList = () => {
  const { tickets } = useSelector((state) => state.movies);

  return (
    <div className="container w-75" style={{ marginRight: '100px' }}>
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

{
  /* <div className="row-container">
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
  </div>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat occupied" />
    <div className="seat occupied" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
  </div>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat occupied" />
    <div className="seat occupied" />
  </div>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
  </div>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat occupied" />
    <div className="seat occupied" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
  </div>
  <h5 className="subtitle">GOLD - ₹650</h5>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
  </div>
  <div className="row">
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat" />
    <div className="seat occupied" />
    <div className="seat occupied" />
    <div className="seat occupied" />
    <div className="seat" />
  </div>
  <h5 className="subtitle">DIAMOND - ₹850</h5>
  <div className="text-wrapper">
    <p className="text">
      Selected Seats <span id="count">0</span>
    </p>
    <p className="text">
      Total Price ₹<span id="total">0</span>
    </p>
  </div>
</div>; */
}
