import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reservations: [],
};

const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action) => {
            state.reservations.push(action.payload);
        },
        removeReservation: (state, action) => {
            state.reservations = state.reservations.filter(reservation => reservation.id !== action.payload.id);
        },
        updateReservation: (state, action) => {
            const index = state.reservations.findIndex(reservation => reservation.id === action.payload.id);
            if (index !== -1) {
                state.reservations[index] = action.payload;
            }
        },
    },
});

export const { addReservation, removeReservation, updateReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
