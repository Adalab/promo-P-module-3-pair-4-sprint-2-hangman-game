// ¿Qué datos dinámicos tengo que pintar en este HTML?
// Mirad dentro de la etiqueta <form> y comprobad si hay alguna variable o constante de JS o del estado de React que estemos utilizando. Si hay algún dato en ese HTML pueden pasar dos cosas:
// Que tengamos que pasar ese dato por props desde el componente App al componente Form. Si este dato lo necesitamos más arriba en el componente App, elegiremos esta opción.
// Que tengamos que mover la declaración, cálculo y uso de ese dato dentro de Form. Si este dato no lo necesitamos más arriba elegiremos esta opción.
// ¿Este código HTML gestiona algún evento de la usuaria?
// Mira dentro de la etiqueta <form> y comprueba si estás escuchando algún evento. En el caso de que haya eventos pueden pasar dos cosas:
// Que ese evento necesite compartir información con otros componentes o con App. Si es así, necesitarás hacer lifting para subir esa información desde Form a App.
// Que ese evento no necesite compartir información con otros componentes. Si es así mueve la función manejadora dentro del componente.
// Respondiendo a todas estas preguntas ya podéis saber qué código hay que mover a Form.js y cuál dejar en App.js.
// Puesto que estamos componentizando y no añadiendo nueva funcionalidad, sabréis que lo habéis hecho bien si al finalizar la refactorización vuestra página sigue funcionando igual que antes.

const Form = (props) => {
  const handleChange = (ev) => {
    let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
    if (re.test(ev.target.value)) {
      props.handleLastLetter(ev.target.value);
    }
  };

  const handleKeyDown = (ev) => {
    ev.target.setSelectionRange(0, 1);
  };

  //PREVIENE ENVÍO DEL FORMULARIO POR DEFECTO
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="title" htmlFor="last-letter">
        Escribe una letra:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        value={props.lastLetter}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
