// import React
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeSeat } from './Redux/movieSlice';

// import Component
import SeatCheckOut from './SeatCheckOut';
// =============================================================================
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.movies);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const handleRemove = (item) => {
    dispatch(removeSeat(item));
    // console.log(seatName);
  };
  let totalPrice = 0;
  if (!cart) {
    return null;
  }

  const openCheckOut = () => {
    setIsCheckedOut(true);
  };
  const closeCheckOut = () => {
    setIsCheckedOut(false);
  };
  return (
    <div className="row w-50">
      <div className="col">
        <h1>Seat Details</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              totalPrice = item.seat.price * cart.length;
              return (
                <tr key={item.seat.name}>
                  <td>{item.seat.name}</td>
                  <td>{item.seat.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(item)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* CHECK OUT SECTION ======================================== */}
        <div className="text-wrapper d-flex">
          <div>
            <p className="text">
              Selected Seats <span id="count">{cart.length}</span>
            </p>

            <p className="text">
              Total Price <span id="total">{totalPrice}</span>
            </p>
          </div>
          <div>
            <button
              className="btn btn-success mt-3 ms-5"
              onClick={openCheckOut}
            >
              Check Out !!!
            </button>
            {isCheckedOut && (
              <SeatCheckOut
                closeCheckOut={closeCheckOut}
                isCheckedOut={isCheckedOut}
                totalPrice={totalPrice}
                seatQuantity={cart.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
