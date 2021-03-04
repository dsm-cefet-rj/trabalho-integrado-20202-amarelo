import React from 'react';



const Tabela = (props) => {
    return (
        <tr>
            <td>
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

export default function home (props) 
{
    return (
        <table id="minhaTabela" >
            <thead><tr id="title"><th>COMPONENTE</th><th>QTD</th><th>Kcal</th></tr></thead>
            <tbody>
                {props.alimentos.map((alimento) => <Tabela key= {alimento.nome} alimento= {alimento} /> )}
            </tbody>
            <tfoot><tr> <td> </td><td></td><td></td></tr></tfoot>
        </table>
    )
}