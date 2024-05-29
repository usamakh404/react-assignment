import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRockets = createAsyncThunk(
  "rockets/fetchRockets",
  async () => {
    const response = await fetch("https://api.spacexdata.com/v4/rockets");
    return response.json();
  }
);

const rocketsSlice = createSlice({
  name: "rockets",
  initialState: {
    rockets: [],
    status: "idle",
    error: null,
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rockets.find(
        (rocket) => rocket.id === action.payload
      );
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelReservation: (state, action) => {
      const rocket = state.rockets.find(
        (rocket) => rocket.id === action.payload
      );
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
