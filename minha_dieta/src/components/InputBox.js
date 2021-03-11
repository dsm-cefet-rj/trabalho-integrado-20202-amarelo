
export default function InputBox (props){
    return(
        <div class="input-group">
              <input
                type="text"
                id="txtBusca"
                placeholder={props.nome}
              />
            </div>
    )
}