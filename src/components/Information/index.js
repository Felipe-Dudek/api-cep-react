import React, {Component} from "react";

class Information extends Component {
    render() {
        return(
            <main className="main-card">
                <h2>CEP: {this.props.informations.cep}</h2>
                <span>Cidade: {this.props.informations.localidade}</span>
                <span>Bairro: {this.props.informations.bairro}</span>
                <span>Rua: {this.props.informations.logradouro}</span>
                <span>Estado: {this.props.informations.uf}</span>
            </main>
        );
    }
}

export default Information