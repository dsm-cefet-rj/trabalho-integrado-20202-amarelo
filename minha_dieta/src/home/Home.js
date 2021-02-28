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
        </tr>
    )
}

export default function home(props) 
{
    return (
        <table id="alimentos" border= "1">
            <tbody>
                {props.alimentos.map((alimento) => <Tabela key= {alimento.nome} alimento= {alimento} /> )}
            </tbody>
        </table>
    )
}