import './App.css';
import Button from './components/Button';
import Information from './components/Information';
import Input from './components/Input';
import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";

function App() {
  const [input, setInput] = useState('');
  const [outputs, setOutputs] = useState({});

  const InputChange = (value) => {
    setInput(value);
  };

  function consultCEP(){
    try{
      fetch(`https://viacep.com.br/ws/${input}/json/`)
      .then(resposta => resposta.json())
      .then(json => setOutputs(json))
    }
    catch (error){
      console.log(error);
    }
  }

  return (
    <div className="root">
      <h1>Buscador CEP</h1>
      <div className="search">
        <Input inputValue={input} press={InputChange}></Input>
        <Button press={consultCEP}><FaSearch ></FaSearch></Button>
      </div>
      {Object.keys(outputs).length && <Information informations={outputs}></Information>}
    </div>
  );
}

export default App;
