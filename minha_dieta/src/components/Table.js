import React from 'react';
import img5 from '../../src/images/buttons/menos1.jpg';


const Tabela = (props) => {
    return (
        <tr>
            <td>
                <a href="" ><img id="imgplus1" src={img5}></img></a>
                {props.alimento.nome}
            </td>
            <td>
                {props.alimento.quantidade}
            </td>
            <td>
                {props.alimento.caloria}
            </td>
        </tr>
    )
}


export default function Tables (props){
    return(
        <table id="minhaTabela" >
            <thead><tr id="title"><th>COMPONENTE</th><th>QTD</th><th>Kcal</th></tr></thead>
            <tbody>
                {props.alimentos.map((alimento) => <Tabela key= {alimento.nome} alimento= {alimento} /> )}
            </tbody>
            <tfoot><tr> <th> </th><th></th><th></th></tr></tfoot>
        </table>

    )
}