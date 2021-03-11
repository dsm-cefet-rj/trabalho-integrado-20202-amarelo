
function Logado(){
    alert("Favor logar primeiro");
}

export default function AddButton(props){
    return(
        
        <button className="btn btn-outline-success btn-sm" type="submit" onClick= {() => Logado()}>{props.nome}</button>
        
    )
}