import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"; 

const initialState = {
    loading: false,
    details: {},
    error: "",
};

const fetchDetails = createAsyncThunk("details/fetchDetails", async (id) => {
    const response = await axios.get(`http://localhost:3001/rooms/${id}`);
    return response.data;
});

const getDetailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.details = action.payload;
            state.error = "";
        });
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loading = false;
            state.details = {};
            state.error = action.error.message;
        });

    },
});
export default getDetailsSlice.reducer;
export {fetchDetails};