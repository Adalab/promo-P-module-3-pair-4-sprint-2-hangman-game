const getWordFromApi = () => {
  return fetch('https://adalab-api.herokuapp.com/api/random/word/')
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response.word;
    });
};

export default getWordFromApi;

// https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/random-word-v1/word.json

// https://clientes.api.greenborn.com.ar/public-random-word
