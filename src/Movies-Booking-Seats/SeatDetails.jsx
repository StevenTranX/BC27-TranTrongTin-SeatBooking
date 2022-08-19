import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { removeSeat } from './Redux/movieSlice';
const ProductDetails = () => {
  const { cart } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removeSeat(item));
    // console.log(seatName);
  };
  let totalPrice = 0;
  if (!cart) {
    return null;
  }
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
        <div className="text-wrapper">
          <p className="text">
            Selected Seats <span id="count">{cart.length}</span>
          </p>

          <p className="text">
            Total Price <span id="total">{totalPrice}</span>
          </p>
        </div>
        {/* CHECK OUT SECTION ======================================== */}
      </div>
    </div>
  );
};

export default ProductDetails;
