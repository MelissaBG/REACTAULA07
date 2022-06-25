//JSX para que sejam exibidos apenas personagens que sejam da família
//Redfield por padrão mas que seja possível parametrizar o nome
//da família.

import { useState } from "react";
import "./styles.css";
export default function App() {
  const [pesquisa, setPesquisa] = useState("");
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];
  const filteredPersonagem = (personagem) => {
    const familiaUpper = pesquisa.toUpperCase();
    return personagem.toUpperCase().includes(familiaUpper);
  };
  const mapearPersonagem = (personagem) => <li>{personagem}</li>;

  const onClickHandler = (Event) => {
    setPesquisa(event.target.value);
  };
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <input onChange={onClickHandler} />
      <ul> {personagens.filter(filteredPersonagem).map(mapearPersonagem)} </ul>
    </div>
  );
}
const App2 = () => {
  const [numero, setNumero] = useState();
  const incrementoCallback = () => {
    setNumero(numero + 1);
    localStorage.setItem("numero", numero);
  };
  console.log("App2 executado");
  return (
    <div>
      <p>Numero de vezes clicado: {numero}</p>
      <button onClick={incrementoCallback}>Incremento</button>
    </div>
  );
};

export default App();
