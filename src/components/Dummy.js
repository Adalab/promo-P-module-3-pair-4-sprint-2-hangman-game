/* Por todo esto:
Cread un componente llamado Dummy.js.
Meted en este componente el último <section className="dummy error-0"> del HTML.
Este componente debe recibir una prop llamada numberOfErrors de tipo number. Con esta prop debéis pintar la clase error-0, error-1...
El componente App debe importar y usar este componente pasándole el número de errores que ha cometido la jugadora.
Y como lo que estamos haciendo es refactorizar, si al finalizar todos los cambios el juego sigue funcionando y el muñeco se pinta bien, es que lo habéis hecho todo fetén. */
import "../styles/Dummy.scss";
function Dummy(props, index) {
  return (
    <section key={index} className={`dummy error-${props.numberOfErrors}`}>
      <span className="error-13 eye"></span>
      <span className="error-12 eye"></span>
      <span className="error-11 line"></span>
      <span className="error-10 line"></span>
      <span className="error-9  line"></span>
      <span className="error-8  line"></span>
      <span className="error-7  line"></span>
      <span className="error-6  head"></span>
      <span className="error-5  line"></span>
      <span className="error-4  line"></span>
      <span className="error-3  line"></span>
      <span className="error-2  line"></span>
      <span className="error-1  line"></span>
    </section>
  );
}

export default Dummy;
