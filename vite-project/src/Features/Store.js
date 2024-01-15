import { configureStore } from "@reduxjs/toolkit";
import ZithasReducer from "../Features/ZithasSlice"
const Store = configureStore({
    reducer: {
        zithas: ZithasReducer
    }
})

export default Store