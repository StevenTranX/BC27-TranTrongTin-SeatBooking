import classNames from 'classnames';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { toggleSeat, addToCart } from './Redux/movieSlice';
import cn from 'classnames';
const SeatItem = () => {
  const { tickets } = useSelector((state) => state.movies);
  const { cart } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleSelect = (ticket, seat) => {
    dispatch(
      toggleSeat({
        row: ticket.row,
        seat: {
          ...seat,
          selected: true,
        },
      })
    );

    dispatch(addToCart({ row: ticket.row, seat: seat }));
  };

  return (
    <>
      {tickets.map((ticket) => {
        return (
          <div className="row-seats" key={ticket.row}>
            {ticket.seats.map((seat) => {
              if (!seat.selected)
                return (
                  <div
                    key={seat.name}
                    className={cn({
                      seat: 'seat',
                      occupied: seat.occupied === true,
                    })}
                    style={{ textAlign: 'center' }}
                    onClick={() => handleSelect(ticket, seat)}
                  >
                    <span className="seatInner">{seat.name}</span>
                  </div>
                );
              else {
                return (
                  <div
                    key={seat.name}
                    className="seat"
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#31d7a9',
                      color: '#fff',
                    }}
                    onClick={() => handleSelect(ticket, seat)}
                  >
                    <span style={{ color: 'black' }} className="seatInner">
                      {seat.name}
                    </span>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </>
  );
};

export default SeatItem;

{
  /* <div
key={seat.name}
className="seat"
style={{ textAlign: 'center' }}
onClick={() => handleSelect(ticket, seat)}
>
<span className="seatInner">{seat.name}</span>
</div> */
}
