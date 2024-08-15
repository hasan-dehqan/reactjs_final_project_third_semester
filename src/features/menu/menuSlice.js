import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  menus: [],
  allMenus: [],
  categories: [],
  loading: false,
  error: null,
};

export const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const response = await axios.get("http://localhost:3001/menu");
  return response.data;
});
console.log("data");

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    filterMenus: (state, action) => {
      const category = action.payload;
      if (category === "all") {
        state.menus = state.allMenus;
      } else {
        state.menus = state.allMenus.filter(
          (menu) => menu.category === category
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMenus.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchMenus.fulfilled, (state, action) => {
      state.loading = false;
      state.menus = action.payload;
      state.allMenus = action.payload;
      state.categories = [
        "all",
        ...new Set(action.payload.map((menu) => menu.category)),
      ];
    });

    builder.addCase(fetchMenus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { filterMenus } = menuSlice.actions;

export default menuSlice.reducer;
