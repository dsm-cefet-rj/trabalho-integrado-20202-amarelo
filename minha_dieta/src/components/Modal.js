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
export default class Modal extends React.Component {
  state = initialState;

  validate = () => {
    let nameError = "";
    let caloriaError = "";
    if (!this.state.name) {
      nameError = "O nome não pode ficar em branco";
    }
    if (!this.state.caloria)
    {
        caloriaError= "A caloria não pode ficar em branco";
    }
    else if (this.state.caloria > 1000 || this.state.caloria < 1)
    {
        caloriaError= "Valor inválido para a caloria";
    }
    if (nameError || caloriaError) {
        this.setState({ nameError, caloriaError });
        return false;
    }
    return true;
  };
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
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
                {this.props.cadastro}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body">
              <label>Categoria: </label>{" "}
              <select class="form-control">
                <option defaultValue>Escolher...</option>
                <option>Café da manhã</option>
                <option>Almoço</option>
                <option>Janta</option>
              </select>
              <label>Nome: </label>
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
              <label>Kcal em 100{this.props.und}:</label>
              <input
                value={this.state.caloria}
                name="caloria"
                onChange={this.handleChange}
                class="form-control"
                placeholder="Calorias..."
              ></input>
               <div style={{ fontSize: 12, color: "red" }}>
                {this.state.caloriaError}
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
