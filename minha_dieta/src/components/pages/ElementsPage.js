import "../../App.css";
import React, { useState, Provider } from "react";
import Table from "../Table";
import NavBar from "../NavBar";
import Carrousel from "../Carrousel";
import AddButton from "../Button";
import InputBox from "../InputBox";
import img5 from "../../images/buttons/menos1.png";
import img6 from "../../images/buttons/mais1.png";
import Modal from "../Modal";
import Modal2 from "../Modal2";





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

const prato = [];



const alimentos = [
  { nome: "Alcatra", quantidade: 100, caloria: 300 },
  { nome: "Alface", quantidade: 100, caloria: 200 },
  { nome: "Banana", quantidade: 100, caloria: 500 },
  { nome: "Goiaba", quantidade: 100, caloria: 700 },
  { nome: "Queijo", quantidade: 100, caloria: 400 },
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

function verificarLogin()
{

}

function salvarRefeicao()
{
    verificarLogin();
    //verificar se o nome do prato já existe
}

function removerElementoPrato()
{
    alert("Deseja remover este item do prato?");
    
}

function adicionarElementoPrato()
{
  //verificar se o alimento ou bebida já está no prato

  //verificar o número de elementos máximo (7)


    alert("Deseja adicionar este item do prato?");
  
}

function somarPropriedadesPrato()
{
  //somar e atualizar a quantidade e calorias do prato
}

export default function ElementsPage(){
    return(
        <>
        <NavBar></NavBar>
      <br></br>
      <Carrousel></Carrousel>
      <br />
      <div class="container">
        <div class="row">
          <div class="container">
            <p class="textobv">
              {" "}
              Seja bem-vindo! Para começar selecione
              alimentos/bebida:{" "}
            </p>{" "}
          </div>
          <div class="col">
            <br />
            <span id="fonte1">
              Refeição <AddButton nome="Salvar" type="button" toggle="modal" target="#ExemploModalCentralizado0"></AddButton>
            </span>
            <Modal2 id="ExemploModalCentralizado0"  ></Modal2>
            <InputBox nome="Buscar Prato..."></InputBox>
            <Table
              
              alimentos={prato}
              url={img5}
              col1="COMPONENTE"
              rod1="TOTAL"
              rod2="600" //atualizar total
              rod3="1200" //atualizar total refeicao
            />
          </div>
          <div class="col">
            {" "}
            <br />
            <span id="fonte1">
              Alimentos <AddButton nome="Cadastrar" type="button" toggle="modal" target="#ExemploModalCentralizado1"></AddButton>
            </span>  
              <Modal id="ExemploModalCentralizado1" cadastro="Cadastrar Alimento" und="gr"></Modal>
            <InputBox nome="Buscar Alimento..."></InputBox>
            <Table alimentos={alimentos} url={img6} col1="ALIMENTO" />
          </div>
          <div class="col">
            {" "}
            <br />
            <span id="fonte1">
              Bebidas <AddButton nome="Cadastrar" type="button" toggle="modal" target="#ExemploModalCentralizado2"></AddButton>
              </span>  
            <Modal id="ExemploModalCentralizado2" cadastro="Cadastrar Bebida" und="ml"></Modal>
            <InputBox nome="Buscar Bebida..."></InputBox>
            <Table alimentos={bebidas} url={img6} col1="BEBIDA" />
          </div>
        </div>
      </div>
      </>
    )
}