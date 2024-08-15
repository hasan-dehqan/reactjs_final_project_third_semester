import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const fetchData = createAsyncThunk("admin/fetchData", async () => {
    const response = await axios.get("http://localhost:3001/data");
    return response.data;
});

const addData = createAsyncThunk("admin/addData", async (newData) => {
    const response = await axios.post("http://localhost:3001/data", newData);
    return response.data;
});

const updateData = createAsyncThunk("admin/updateData", async (updatedData) => {
    const response = await axios.put(`http://localhost:3001/data/${updatedData.id}`, updatedData);
    return response.data;
});

const deleteData = createAsyncThunk("admin/deleteData", async (id) => {
    await axios.delete(`http://localhost:3001/data/${id}`);
    return id;
});

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
        builder.addCase(addData.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });
        builder.addCase(updateData.fulfilled, (state, action) => {
            const index = state.data.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = action.payload;
            }
        });
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.data = state.data.filter(item => item.id !== action.payload);
        });
    },
});

export default adminSlice.reducer;
export { fetchData, addData, updateData, deleteData };
