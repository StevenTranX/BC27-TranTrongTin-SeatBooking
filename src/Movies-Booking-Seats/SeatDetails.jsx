import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { removeSeat } from './Redux/movieSlice';
const ProductDetails = () => {
  const { selectedSeat } = useSelector((state) => state.movies);
  const { cart } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const handleRemove = (seatName) => {
    dispatch(removeSeat(seatName));
    // console.log(seatName);
  };
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
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>

                  {/* <td>{item.price * item.quantity}</td> */}
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(item.name)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
