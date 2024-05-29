import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "../store/mission/missionSlice";
import rocketReducer from "../store/rocket/rocketSlice";

export const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});
