import React, { Component } from "react";

class Button extends Component {
    render() {
        return(
            <button className="botao-pesquisar" onClick={this.props.press}>{this.props.children}</button>
        );
    }
}
 
export default Button