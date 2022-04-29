// styles
import "../styles/App.scss";
import "../styles/Form.scss";
//aplicaciones
import { useEffect, useState } from "react";

/* import { Routes, Route } from "react-router-dom"; */

//componentes
import Header from "./Header";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import ErrorLetters from "./ErrorLetters";
import Form from "./Form";
import Footer from "./Footer";

// api
import getWordFromApi from "../services/api";

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const maxNumberOfErrors = 13;

  useEffect(() => {
    setLoading(true);
    getWordFromApi().then((word) => {
      console.log(word);
      setWord(word);
      setLoading(false);
    });
  }, []);

  // events

  const handleWord = (value) => {
    setWord(value);
    setUserLetters([]);
    setLastLetter("");
  };

  // const handleKeyDown = (ev) => {
  //   // Sabrías decir para qué es esta línea
  //   ev.target.setSelectionRange(0, 1);
  // };

  // const handleChange = (ev) => {
  //   let re = /[a-zA-Z]/; //add regular pattern - lesson 3.3 exercise 2
  //   if (re.test(ev.target.value)) {
  //     handleLastLetter(ev.target.value);
  //   }
  // };

  //NÚMERO DE ERRORES
  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  //CONTROLA LA LETRA QUE ESCRIBE LA USUARIA
  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);
    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters
            pword={JSON.stringify(word)}
            puserLetters={userLetters}
          />
          <ErrorLetters puserLetters={userLetters} pword={word} />
          <Form value={lastLetter} handleLastLetter={handleLastLetter} />
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()} />
      </main>
      <Footer />
    </div>
  );
}

/* 1. Instalando y configurando React Router DOM
Como os habréis imaginado el primer paso para hacer estos nuevos cambios es instalar y configurar React Router DOM. Sigue las instrucciones de la lección de hoy para hacerlo. */

export default App;
