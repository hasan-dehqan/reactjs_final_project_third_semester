import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  rooms: [],
  error: "",
};

const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await axios.get("http://localhost:3001/rooms");
  return response.data;
});

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.loading = false;
      state.rooms = [];
      state.error = action.error.message;
    });
  },
});
export default roomsSlice.reducer;
export { fetchRooms };
