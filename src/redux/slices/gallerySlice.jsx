import { createSlice } from "@reduxjs/toolkit";

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        value: ["Shubham"]
    },
    reducers: {
        
        add: (state,action) =>{
            state.value = [...state.value,action.payload];
            // console.log(JSON.parse(JSON.stringify(state.value)));
            
        }
    }
})

export const {add} = gallerySlice.actions;

export default gallerySlice.reducer;