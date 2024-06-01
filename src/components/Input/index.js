import react from "react";

function Input({ press }, props) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        press(value);
    };

    return(
        <input type="text" placeholder="Digite Seu CEP..." 
        className="input-pesquisar" onChange={handleInputChange} maxLength={9}
        ></input>
    );  
}

export default Input;