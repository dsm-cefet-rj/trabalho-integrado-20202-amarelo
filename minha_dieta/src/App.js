import "./App.css";
import React, { useState } from "react";
import Table from "./components/Table";
import NavBar from "../src/components/NavBar";
import Carrousel from "./components/Carrousel";
import NavBarSearchBox from "./components/NavBarSearchBox";

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

function App(props) {
  // const [prato, setPrato] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <NavBarSearchBox></NavBarSearchBox>
      <Carrousel></Carrousel>
      <div class="container">
        <div class="row">
          <div>
            {" "}
            <br />
            <b>
              Seja bem-vindo! Para começar escolha uma dieta ou selecione
              alimentos/bebida:
            </b>
          </div>
          <div class="col">
            {" "}
            <br />
            <span id="fonte1">Dieta</span>
            <div class="input-group">
              <input type="text" id="txtBusca" placeholder="Buscar Dieta..." />
            </div>
            <Table alimentos={dieta} />
          </div>
          <div class="col">
            <span id="fonte1">Alimentos</span>
            <div class="input-group">
              <input
                type="text"
                id="txtBusca"
                placeholder="Buscar Alimento..."
              />
            </div>
            <Table alimentos={alimentos} />
          </div>
          <div class="col">
            <span id="fonte1">Bebidas</span>
            <div class="input-group">
              <input type="text" id="txtBusca" placeholder="Buscar bebida..." />
            </div>
            <Table alimentos={bebidas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
