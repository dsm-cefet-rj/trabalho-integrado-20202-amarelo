import logo from "../../images/logo3.png";
import css3 from "../../../src/App2.css";

export default function Register(){
    return(
        <>
        <head> <link rel="stylesheet" type="text/css" href={css3}></link></head>
        <div class="container">
        <div class="card card-container">
            <a href="/index"><img id="profile-img" class="profile-img-card" src={logo} /></a>
            <p id="profile-name" class="profile-name-card">Cadastre-se</p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="text" id="nome" class="form-control" placeholder="Nome" required autofocus></input>
                <input type="text" id="nome" class="form-control" placeholder="E-mail" required autofocus></input>
                <input type="password" id="senha" class="form-control" placeholder="Senha" required></input>
                <input type="password" id="senha" class="form-control" placeholder="Confirmar Senha" required></input>
                
                <button class="btn  btn-primary btn-signin" type="submit">Cadastrar</button>
            </form>
            
        </div>
    </div>
    </>
    )
}