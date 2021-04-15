import React from "react";


export default function Modal3(props)
{
    return(
        <div
        class="modal"
        id={props.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="TituloModalCentralizado"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className="modal-title" id="TituloModalCentralizado" style={{color: "#060" }}>
                Excluir
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body"> 
              <p style={{color: "#000" }}>Excluir refeição #nome_refeicao? </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" >
                Fechar
              </button>
              <button type="button" class="btn btn-success" >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}