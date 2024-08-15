import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};


const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.list.push({
                ...action.payload,
                isExist: true,
            });
        },
        removeToList: (state, action) => {
            const indexR = state.list.findIndex(
                (item) => item.id === action.payload.id
            );
            state.list[indexR].isExist = false;

            const newList = state.list.filter(
                (item) => item.id !== action.payload.id
            );
            state.list = newList;
        },
    },
});

export default listSlice.reducer;
export const { addToList, removeToList } = listSlice.actions;