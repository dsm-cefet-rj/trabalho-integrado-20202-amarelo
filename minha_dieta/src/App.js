import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table";
import NavBar from "../src/components/NavBar";
import Carrousel from "./components/Carrousel";
import NavBarSearchBox from "./components/NavBarSearchBox";
import AddButton from './components/Button';
import InputBox from './components/InputBox';
import img5 from "./images/buttons/menos1.png";
import img6 from "./images/buttons/mais1.png";

const categoria_dietas = [
  { nome: "MONTAR PRATO" },
  { nome: "CETOGÊNICA" },
  { nome: "DASH" },
  { nome: "DUKAN" },
  { nome: "GLUTEN FREE" },
  { nome: "LOW-CARB" },
  { nome: "MEDITERRÂNEA" },
  { nome: "PALEOLÍTICA" },
  { nome: "RAVENNA" },
  { nome: "SEM LACTOSE" },
  { nome: "VEGANA" },
];

const categoria_alimentos = [
  { nome: "CARNES E OVOS" },
  { nome: "CEREAIS" },
  { nome: "FRUTAS" },
  { nome: "LEGUMES" },
  { nome: "LEGUMINOSAS" },
  { nome: "ÓLEOS E GORDURAS" },
  { nome: "PÃES" },
  { nome: "TUBÉRCULOS" },
  { nome: "VERDURAS" },
  { nome: "OUTROS" },
];

const categoria_bebidas = [
  { nome: "CHÁS" },
  { nome: "LATICÍNIOS" },
  { nome: "SUCOS" },
  { nome: "OUTROS" },
];

const dieta = [
  { nome: "Refrigerante", quantidade: 100, caloria: 300 },
  { nome: "Alface", quantidade: 100, caloria: 200 },
  { nome: "Banana", quantidade: 100, caloria: 500 },
  { nome: "Alcatra", quantidade: 100, caloria: 700 },
  { nome: "Queijo", quantidade: 100, caloria: 400 },
];

const alimentos = [
  { nome: "Alcatra", quantidade: 100, caloria: 300 },
  { nome: "Alface", quantidade: 100, caloria: 200 },
  { nome: "Banana", quantidade: 100, caloria: 500 },
  { nome: "Goiaba", quantidade: 100, caloria: 700 },
  { nome: "Queijo", quantidade: 100, caloria: 400 },
];

const bebidas = [
  { nome: "Guaraná", quantidade: 100, caloria: 300 },
  { nome: "Chá de hibisco", quantidade: 100, caloria: 200 },
  { nome: "Café", quantidade: 100, caloria: 500 },
  { nome: "Suco de Uva", quantidade: 100, caloria: 700 },
  { nome: "Refrigerante", quantidade: 100, caloria: 400 },
];

const prato = [

]

function App(props) {
  // const [prato, setPrato] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <NavBarSearchBox></NavBarSearchBox>
      <Carrousel></Carrousel>
      <br/>
      <div class="container">
        <div class="row">
        <div class="container"><p class="textobv"> Seja bem-vindo! Para começar escolha uma dieta ou selecione alimentos/bebida: </p> </div>
          <div class="col">
            <br />
            <span id="fonte1">Dieta  <AddButton nome='Salvar' ></AddButton></span>
            <InputBox nome='Buscar Dieta...'></InputBox>
            <Table alimentos={dieta} url={img5} col1="COMPONENTE" rod1="TOTAL" rod2="600" rod3="1200" />
          </div>
          <div class="col"> <br />
            <span id="fonte1">Alimentos  <AddButton nome='Cadastrar'></AddButton></span>
            <InputBox nome='Buscar Alimento...'></InputBox>
            <Table alimentos={alimentos} url={img6} col1="ALIMENTO"/>
          </div>
          <div class="col"> <br />
            <span id="fonte1">Bebidas  <AddButton nome='Cadastrar'></AddButton></span>
            <InputBox nome='Buscar Bebida...'></InputBox>
            <Table alimentos={bebidas} url={img6} col1="BEBIDA"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
