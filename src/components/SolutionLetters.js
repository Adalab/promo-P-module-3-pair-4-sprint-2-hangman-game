/* Cread un componente llamado SolutionLetters.
Moved la etiqueta <div className="solution"> desde App a este nuevo componente.
Este componente necesita recibir por props tanto word como userLetters para poder pintar los guiones y las letras.
Moved la función renderSolutionLetters también dentro del componente para hacer el cálculo de los guiones que hay que pintar.
Y por último pero no menos importante, importad el fichero letters.scss, ya que este componente usa estos estilos. */
import "../styles/Letters.scss";
function SolutionLetters(props) {
  const renderSolutionLetters = () => {
    const wordLetters = props.pword.split("");
    return wordLetters.map((letter, index) => {
      const exists = props.puserLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className="letter">
          {exists ? letter : ""}
        </li>
      );
    });
  };
  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
