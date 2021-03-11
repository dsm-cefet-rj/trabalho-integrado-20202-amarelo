import React from "react";
import img5 from "../../src/images/buttons/menos1.jpg";
import "./Table.css";

function adicionar()
{
    alert("Deseja adicionar este item a sua dieta?");
    /* const itensCopy = Array.from(prato);
    itensCopy.push({nome: prato})
    setPrato(itensCopy); */
}

const Tabela = (props) => {
  return (
    <tr>
      <td>
        <button id="botaoAdd" onClick= {() => adicionar()}>
          <img id="imgplus1" src={img5}></img>
        </button>
        {props.alimento.nome}
      </td>
      <td>{props.alimento.quantidade}</td>
      <td>{props.alimento.caloria}</td>
    </tr>
  );
};

export default function Tables(props) {
  return (
    <table id="minhaTabela">
      <thead>
        <tr id="title">
          <th>COMPONENTE</th>
          <th>QTD</th>
          <th>Kcal</th>
        </tr>
      </thead>
      <tbody>
        {props.alimentos.map((alimento) => (
          <Tabela key={alimento.nome} alimento={alimento} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          {" "}
          <th> </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}
