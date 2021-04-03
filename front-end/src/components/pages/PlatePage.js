import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";


export default function Plate(props){
    
    return(
        <>
            <NavBar></NavBar>

            <Jumbotron nome="Raphael"></Jumbotron>

            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card text-white bg-success mb-3" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Café da Manhã</b></h5>
                                <p class="card-text">100 gr de bolo de cenoura</p>
                                <p class="card-text">200 ml de leite</p>
                                <h6 class="card-title text-center"><b>450 kcal</b></h6>
                                <a href="#" class="btn btn-danger btn-sm float-right">Excluir</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card text-white bg-success mb-3" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Almoço</b></h5>
                                <p class="card-text">50 gr de alface</p>
                                <p class="card-text">50 gr de arroz</p>
                                <p class="card-text">100 gr de alcatra</p>
                                <p class="card-text">100 gr de feijão</p>
                                <p class="card-text">200 ml de suco de uva</p>
                                <h6 class="card-title text-center"><b>900 kcal</b></h6>
                                <a href="#" class="btn btn-danger btn-sm float-right">Excluir</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card text-white bg-success mb-3" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Jantar</b></h5>
                                <p class="card-text">50 gr de alface</p>
                                <p class="card-text">50 gr de ovos</p>
                                <p class="card-text">100 gr de frango</p>
                                <h6 class="card-title text-center"><b>500 kcal</b></h6>
                                <a href="#" class="btn btn-danger btn-sm ">Excluir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}