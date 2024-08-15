import { createSlice } from "@reduxjs/toolkit";
import a from "../../images/a.jpg";
import b from "../../images/b.jpg";
import c from "../../images/c.jpg";
import d from "../../images/d.jpg";
import e from "../../images/e.jpg";

const initialState = {
  sliderValue: 0,
  imageNames: [a, b, c, d, e],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliderValue: (state, action) => {
      state.sliderValue = action.payload;
    },
  },
});

export const { setSliderValue } = sliderSlice.actions;
export default sliderSlice.reducer;
