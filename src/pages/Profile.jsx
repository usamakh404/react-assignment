import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const reservedMissions = useSelector((state) =>
    state.missions.missions.filter((mission) => mission.reserved)
  );
  const reservedRockets = useSelector((state) =>
    state.rockets.rockets.filter((rocket) => rocket.reserved)
  );

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="profile-content">
        <div className="profile-section">
          <h3>Reserved Missions</h3>
          {reservedMissions.length > 0 ? (
            <ul>
              {reservedMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>
              ))}
            </ul>
          ) : (
            <p>No reserved missions.</p>
          )}
        </div>
        <div className="profile-section">
          <h3>Reserved Rockets</h3>
          {reservedRockets.length > 0 ? (
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.name}</li>
              ))}
            </ul>
          ) : (
            <p>No reserved rockets.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
