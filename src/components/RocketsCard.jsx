import React from "react";

const RocketsCard = ({ rocket, onReserve, onCancel }) => {
  return (
    <div className="rocket-card">
      <img
        src={rocket.flickr_images[0]}
        alt={rocket.name}
        className="rocket-image"
      />
      <div className="rocket-details">
        <h3>{rocket.name}</h3>

        {rocket.reserved ? (
          <p>
            {" "}
            <span className="reserved-text">Reserved</span>
            {rocket.description}
          </p>
        ) : (
          <p> {rocket.description}</p>
        )}

        <p>
          {rocket.reserved ? (
            <button className="action-button cancel-button" onClick={onCancel}>
              Cancel Reservation
            </button>
          ) : (
            <button
              className="action-button reserve-button"
              onClick={onReserve}
            >
              Reserve Rocket
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default RocketsCard;
