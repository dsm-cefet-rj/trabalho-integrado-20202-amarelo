import React from "react";


    
const IngredientesPratos = (props) => {
    return(
        <p className="card-text">
          {props.ingredientes.qtd} {props.ingredientes.und} de {props.ingredientes.nome} 
        </p>
    );

}



export default function Pratos(props) {
    
    return(
        
        <div className="col-sm-4">
            <div className="card text-white bg-success mb-3" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title text-center"><b>{props.prato}</b></h5>
                    
                  
                    {props.ingredientes.map((ingrediente) => (
          <IngredientesPratos  key={ingrediente.qtd} ingrediente={ingrediente} />
        ))}
                     
                   
                    <h6 className="card-title text-center"><b>{props.calorias} Kcal</b></h6>
                    <button className="btn btn-danger btn-sm float-right" type="button" data-toggle="modal" data-target="#delete" >Excluir</button>    
                    
                </div>
            </div>
        </div>

                         
    );
                        
}
