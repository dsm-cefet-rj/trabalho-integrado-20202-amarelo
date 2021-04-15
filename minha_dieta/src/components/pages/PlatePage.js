import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";
import Modal3 from "../Modal3";
import Pratos from "../Pratos";
import React, { useState, Provider } from "react";



const ingredientes = [
    { qtd: 100, und: 'gr', nome: "Macarrão"},
    { qtd: 100, und: 'gr', nome: "Arroz"},
    { qtd: 100, und: 'gr', nome: "Feijao"},
    { qtd: 100, und: 'ml', nome: "Coca"},
  ];

//arraymap dos pratos
export default function Plate(props){
    
    return(
        <>
            <NavBar></NavBar>
            <Modal3 id="delete"  ></Modal3>
            <Jumbotron nome="Raphael"></Jumbotron>

            <div className="container">
                <div className="row">
                
                <Pratos ingredientes={ingredientes} prato={'Almoço'} calorias={2000}/>
                <Pratos />
                <Pratos />
                <Pratos />
                
                </div>
            </div>
        </>    
    );
}