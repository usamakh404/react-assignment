import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRockets,
  reserveRocket,
  cancelReservation,
} from "../store/rocket/rocketSlice";
import RocketsCard from "../components/RocketsCard";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketStatus = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  useEffect(() => {
    if (rocketStatus === "idle") {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let content;

  if (rocketStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (rocketStatus === "succeeded") {
    content = rockets.map((rocket) => (
      <RocketsCard
        key={rocket.id}
        rocket={rocket}
        onReserve={() => handleReserve(rocket.id)}
        onCancel={() => handleCancel(rocket.id)}
      />
    ));
  } else if (rocketStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <div className="rocket-list">{content}</div>
    </div>
  );
};

export default Rockets;
