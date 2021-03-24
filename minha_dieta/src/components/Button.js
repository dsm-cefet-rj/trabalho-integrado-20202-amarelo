
function Logado(){
    alert("Favor logar primeiro");
}

export default function AddButton(props){
    return(
        
        <button className="btn btn-outline-success btn-sm" type={props.type} 
         data-toggle={props.toggle} data-target={props.target} >{props.nome}</button>
        
    )
}