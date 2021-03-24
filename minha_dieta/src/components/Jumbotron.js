

export default function Jumbotron(props){
    return(
        <div className="jumbotron jumbotron-fluid bg-light">
                <div class="container">
                <h1 class="display-5" style={{color:"green"}}>Olá, {props.nome}!</h1>
                <p class="lead">Aqui estão seus pratos salvos.</p>
                </div>
            </div>
    )
}