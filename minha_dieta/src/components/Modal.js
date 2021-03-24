

export default function Modal (props){
    return(
   
            <div class="modal" id={props.id} tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="TituloModalCentralizado">{props.cadastro}</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Fechar">
                        </button>
                        </div>
                        <div class="modal-body">
                            <label>Categoria: </label> <select class="form-control">
                                <option selected>Escolher...</option>
                                <option>Cereais</option>
                                <option>Leguminosas</option>
                            </select>
                            <label>Nome: </label>
                            <input type="text" class="form-control"  placeholder="Nome..."></input>
                            <label>Kcal em 100{props.und}: </label>
                            <input type="text" class="form-control"  placeholder="Calorias..."></input>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-success">Cadastrar</button>
                        </div>
                        </div>
                </div>
            </div>
    )
}