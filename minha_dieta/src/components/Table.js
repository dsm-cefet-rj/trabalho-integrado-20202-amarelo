import React from "react";
import img5 from "../../src/images/buttons/menos1.png";
import img6 from "../../src/images/buttons/mais1.png";
import "./Table.css";

function adicionar()
{
    alert("Deseja adicionar este item a sua dieta?");
    /* const itensCopy = Array.from(prato);
    itensCopy.push({nome: prato})
    setPrato(itensCopy); */
}

const LinhasTabela = (props) => {
  return (
    <tr>
      <td>
        <a onClick= {() => adicionar()}>
          <img id="imgplus1" src={props.url}></img>
        </a>
        {props.alimento.nome}
      </td>
      <td>{props.alimento.quantidade}</td>
      <td>{props.alimento.caloria}</td>
    </tr>
  );
}

export default function Tables(props) {
  return (
    <table id="minhaTabela">
      <thead>
        <tr id="title">
          <th>{props.col1}</th>
          <th>QTD</th>
          <th>Kcal</th>
        </tr>
      </thead>
      <tbody>
        {props.alimentos.map((alimento) => (
          <LinhasTabela url={props.url} key={alimento.nome} alimento={alimento} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>{props.rod1}</th>
          <th>{props.rod2}</th>
          <th>{props.rod3}</th>
        </tr>
      </tfoot>
    </table>
  );
}
