
export default function NavBarSearchBox () {
    return(
        <nav className="navbar navbar-expand-lg navbar-right navbar-light bg-light">
        <div className="collapse navbar-collapse justify-content-end" id="conteudoNavbarSuportado" >
           <form className="d-flex" >
            <input className="form-control" type="search" placeholder="Pesquisar..." aria-label="Pesquisar"></input>
            <button className="btn btn-outline-success" type="submit">Pesquisar</button>
          </form>
        </div>
    </nav>
    )
}