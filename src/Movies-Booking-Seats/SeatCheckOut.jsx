import React from 'react';
import { useDispatch } from 'react-redux';
import { resetInitState } from './Redux/movieSlice';
const SeatCheckOut = ({
  closeCheckOut,
  isCheckedOut,
  totalPrice,
  seatQuantity,
}) => {
  const dispatch = useDispatch();
  const handleCheckOut = () => {
    dispatch(resetInitState());
    closeCheckOut();
  };
  return (
    <>
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: isCheckedOut ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeCheckOut}
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-warning">
              <h3 className="text-warning">
                Seats : {seatQuantity} - Total Price : {totalPrice}
              </h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleCheckOut}
              >
                Check Out !!!
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeCheckOut}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {isCheckedOut && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default SeatCheckOut;
