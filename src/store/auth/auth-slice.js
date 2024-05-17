import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:{
            name: "MrScript",
            status: "connected"
        }
    }
})