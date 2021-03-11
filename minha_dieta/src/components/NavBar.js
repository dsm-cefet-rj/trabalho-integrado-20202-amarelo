import logo3 from '../images/logo3.png';


export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="index.html"><img src={logo3}  width="128" height="50" ></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse justify-content-end" id="conteudoNavbarSuportado">
          <ul class="navbar-nav mr-auto"><li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Entrar</a>
                <a class="dropdown-item" href="#">Sair</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Sobre</a>
              </div>
            </li>
           </ul>
           
        </div>
      </nav>
    )
}