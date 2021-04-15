import { useForm } from "react-hook-form";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { number } from "yup/lib/locale";

const initialState = {
  name: "",
  caloria: "",
  nameError: "",
  caloriaError: ""
};
export default class Modal2 extends React.Component {
  state = initialState;

  validate = () => {
    let nameError = "";
    
    if (!this.state.name) {
      nameError = "Digite um nome válido!";
      return false;
    }
    
    return true;
  };
  
  onSubmit = (event) => {
    event.preventDefault();
    this.validate();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div
        class="modal"
        id={this.props.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="TituloModalCentralizado"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="TituloModalCentralizado">
                Cadastrar Refeição
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body"> 
              <label>Nome da Refeição: </label>
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                class="form-control"
                placeholder="Nome..."
              ></input>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameError}
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={event => this.setState(initialState)}>
                Cancelar
              </button>
              <button type="button" class="btn btn-success" onClick={event => this.onSubmit(event)}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


