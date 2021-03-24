import "./App.css";
import React from 'react';
import { Provider } from 'react-redux'
import Rotas from "./rotas/Rotas";
import {store} from "./store/store";
import { fetchPratos } from "./store/reducers/pratosReducer";

store.dispatch(fetchPratos());

export default function App() {
  return (
  
      <Provider store={store}>
          <Rotas/>
      </Provider>
   
  );
}


