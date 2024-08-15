import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  foods: [],
  error: "",
};

export const fetchFoods = createAsyncThunk("foods/fetchFoods", async () => {
  const response = await axios.get("http://localhost:3001/foods");
  return response.data;
});

// ساخت اسلایس
const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = "";
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default foodsSlice.reducer;
