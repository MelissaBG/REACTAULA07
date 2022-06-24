//JSX para que sejam exibidos apenas personagens que sejam da família
//Redfield por padrão mas que seja possível parametrizar o nome
//da família.

import "./styles.css";
const personagens = [
  "Jill Valentine",
  "Claire Redfield",
  "Ada Wong",
  "Chris Redfield",
  "Leon S. Kennedy",
  "Albert Wesker"
];

export default function App(props) {
  const personagem = props.personagem;
  const nomeFamilia = personagem.familia;

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens
          .filter((personagem) => personagem.includes("Redfield"))
          .map((filteredPersonagem) => (
            <li>{filteredPersonagem}</li>
          ))}
      </ul>
    </div>
  );
}
