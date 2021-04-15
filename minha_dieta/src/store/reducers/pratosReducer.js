import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { httpDelete, httpGet, httpPut, httpPost } from '../utils'

const baseUrl = 'http://localhost:8000/meus-pratos';

//entity adapter
const pratosAdapter = createEntityAdapter();

//estado inicial dos anuncios
const initialPratos = pratosAdapter.getInitialState({
    status: 'not_loaded',
    error: null
});

//crud
export const fetchPratos = createAsyncThunk('meus-pratos/fetchPratos', async () => {
    return await httpGet(`${baseUrl}`);
});

export const deletePratosServer = createAsyncThunk('meus-pratos/deleteAnunciosServer', async (id) => {
    await httpDelete(`${baseUrl}/${id}`);
    return id;
});

export const addPratosServer = createAsyncThunk('meus-pratos/addPratosServer', async (nome_prato) => {
    return await httpPost(`${baseUrl}/`, nome_prato);
});

export const updatePratosServer = createAsyncThunk('meus-pratos/updatePratosServer', async (prato) => {
    return await httpPut(`${baseUrl}/${prato.id}`, prato);
});

export const pratosSlice = createSlice({
    name: 'pratos',
    initialState: initialPratos,
    reducers: {
        setKeyPratoAtual: (state, action) => ({ ...state, keyPratoAtual: action.payload }),
    },
    extraReducers: {
        [fetchPratos.pending]: (state) => {state.status = 'loading'},
        [fetchPratos.fulfilled]: (state, action) => {
            state.status = 'loaded';
            pratosAdapter.setAll(state, action.payload);
        }, 
        [fetchPratos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

        [deletePratosServer.pending]: (state) => {state.status = 'loading'},
        [deletePratosServer.fulfilled]: (state, action) => {state.status = 'deleted'; pratosAdapter.removeOne(state, action.payload);},

        [addPratosServer.pending]: (state) => {state.status = 'loading'},
        [addPratosServer.fulfilled]: (state, action) => {state.status = 'saved'; pratosAdapter.addOne(state, action.payload);},

        [updatePratosServer.pending]: (state) => {state.status = 'loading'},
        [updatePratosServer.fulfilled]: (state, action) => {state.status = 'saved'; pratosAdapter.upsertOne(state, action.payload);},
        [updatePratosServer.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    }
})

export const { setKeyPratoAtual } = pratosSlice.actions;

export const {
    selectAll: selectAllPratos,
    selectById: selectPratosById,
    selectIds: selectPratosIds
} = pratosAdapter.getSelectors(state => state.pratos);

export default pratosSlice.reducer;