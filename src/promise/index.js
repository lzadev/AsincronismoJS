const algoPasara = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hey!") : reject(new Error("Algo salio mal"));
  });
};

algoPasara()
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));

const algoPasara2 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("True");
        }, 3000)
      : reject(new Error("Algo salio mal!"));
  });
};

algoPasara2()
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));

// Promise.all() el metodo all nos devuelve un arreglo con los resultados de la promesa
Promise.all([algoPasara(), algoPasara2()])
  .then((resp) => console.log(resp))
  .catch((error) => console.error(error));
