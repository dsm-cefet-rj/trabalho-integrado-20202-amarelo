import logo3 from '../images/logo3.png';



export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="/index"><img src={logo3}  width="128" height="50" ></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse justify-content-end" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto"><li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href='/index'>Home</a>
                <a className="dropdown-item" href="/login">Entrar</a>
                <a className="dropdown-item" href='/meus-pratos'>Meus pratos</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">Sair</a>
              </div>
            </li>
           </ul>
           
        </div>
      </nav>
    )
}