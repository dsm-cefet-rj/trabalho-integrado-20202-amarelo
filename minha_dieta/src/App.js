import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './home/Home.js';

const alimentos= [
  {nome: 'Alcatra', quantidade: '100'},
  {nome: 'Alface', quantidade: '100'},
  {nome: 'Banana', quantidade: '100'},
  {nome: 'Goiaba', quantidade: '100'},
]

function App(props) 
{
  return (<>
    <h1>{props.texto}</h1>
    <br />
    <Home alimentos= {alimentos} />
  </>);
}

export default App;
