/* Pues bien, en este ejercicio debéis crear el componente ErrorLetters y mover dentro todo lo relativo a esta funcionalidad: el HTML, Sass, la función de JS, los estilos... Y como en el ejercicio anterior esta función también necesita recibir por props word y userLetters. */
import "../styles/Letters.scss";
function ErrorLetters(props) {
  const renderErrorLetters = () => {
    const errorLetters = props.puserLetters.filter(
      (letter) =>
        props.pword.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) ===
        false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };
  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">{renderErrorLetters()}</ul>
    </div>
  );
}

export default ErrorLetters;
