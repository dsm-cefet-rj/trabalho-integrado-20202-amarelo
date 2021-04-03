import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialPlates = {pratosObjs:[]};

export const fetchPratos = createAsyncThunk('index/fetchPrato',
    async () => {
        return await (await fetch('http://localhost:8000/index')).json();
    });


function fullfillPratosReducer(initialState, PratosFetched) {
    return PratosFetched;
}

export const pratosSlice = createSlice({
    name: 'pratos',
    initialState: initialPlates,
    reducers: {
        setKeyAnuncioAtual: (state, action) => ({ ...state, keyPratoAtual: action.payload }),
    },
    extraReducers: {
        [fetchPratos.fulfilled]: (state, action) => fullfillPratosReducer(state, action.payload),
    }
})

export const { setKeyPratoAtual } = pratosSlice.actions

export default pratosSlice.reducer