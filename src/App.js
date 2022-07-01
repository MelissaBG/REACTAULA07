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
    "Albert Wesker",
    "Lucas Baker"
  ];

  const filteredPersonagem = (personagem) => {
    const familiaUpper = pesquisa.toUpperCase();
    const filtrar = personagem.toUpperCase().includes(familiaUpper);

    console.log(familiaUpper);
    console.log(personagem);
    return personagem.toUpperCase().includes(familiaUpper);
  };
  const mapearPersonagem = (personagem) => <li>{personagem}</li>;

  const onClickBaker = (event) => {
    setPesquisa(event.target.value);
  };

  const onClickHandleRedfield = (event) => {
    setPesquisa("Redfield");
  };
  const onClickHandleBaker = (event) => {
    setPesquisa("Baker");
  };
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <button onClick={onClickHandleRedfield}>Redfield</button>
      <button onClick={onClickHandleBaker}>Baker</button>
      <ul> {personagens.filter(filteredPersonagem).map(mapearPersonagem)} </ul>
      <ul> {personagens.filter(filteredPersonagem)} </ul>
    </div>
  );
}
const App2 = () => {
  const [numero, setNumero] = useState(0);
  const [pesquisaRedfield, setPesquisaRedfield] = useState();
  const incrementoCallback = () => {
    setNumero(numero + 1);
    localStorage.setItem("numero", numero);
  };
  console.log("App2 executado");
  return (
    <div>
      <p>Numero de vezes clicado:{numero}</p>
      <button onClick={incrementoCallback}>Incremento</button>
    </div>
  );
};
//Considere o component Personagens declarado abaixo.
//Você deve criar dois botões, um para que sejam listados todos os personagens
//que são da família Redfield e um botão para que
//sejam listados todos os personagens da família Baker.
