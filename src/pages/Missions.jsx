import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMissions,
  reserveMission,
  cancelReservation,
} from "../store/mission/missionSlice";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const missionStatus = useSelector((state) => state.missions.status);
  const error = useSelector((state) => state.missions.error);

  const handleReserve = (id) => {
    dispatch(reserveMission(id));
  };

  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };

  useEffect(() => {
    if (missionStatus === "idle") {
      dispatch(fetchMissions());
    }
  }, [missionStatus, dispatch]);

  let content;

  if (missionStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (missionStatus === "succeeded") {
    content = (
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                {mission.reserved ? (
                  <button className="active-member" disabled>
                    Active Member
                  </button>
                ) : (
                  <button className="not-a-member" disabled>
                    NOT A MEMBER
                  </button>
                )}
              </td>

              <td>
                {mission.reserved ? (
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="reserve-button"
                    onClick={() => handleReserve(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (missionStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <div className="mission-list">{content}</div>
    </div>
  );
};

export default Missions;
