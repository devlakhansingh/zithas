import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ZithasService from "./ZithasService";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    datass: [],
    message: ""

}

const ZithasSlice = createSlice({
    name: "zithas",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(saveZithas.pending, (state) => {
            state.isLoading = true

        })
        builder.addCase(saveZithas.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.datass = [...state.datass, action.payload]


        })
        builder.addCase(saveZithas.rejected, (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true

        })

        builder.addCase(getZithas.pending, (state) => {
            state.isLoading = true

        })
        builder.addCase(getZithas.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.datass = action.payload


        })
        builder.addCase(getZithas.rejected, (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true

        })

    }
})

export default ZithasSlice.reducer


export const saveZithas = createAsyncThunk("/CRAETE", async (formdata) => {
    try {
        return await ZithasService.addtodo(formdata)
    } catch (error) {
        console.log(error)
    }
})

export const getZithas = createAsyncThunk("/FETCH", async () => {
    try {
        return await ZithasService.fetchtodo()
    } catch (error) {
        console.log(error)
    }
})