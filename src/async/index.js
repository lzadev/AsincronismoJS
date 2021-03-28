const doAsync = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => {
          resolve("Do Async");
        }, 3000)
      : reject(new Error("Algo salio mal!"));
  });
};

const doAsyncAwait = async () => {
  const something = await doAsync();

  console.log(something);
};

console.log("Before");

doAsyncAwait();

console.log("After");

const anotherAsync = async () => {
  try {
    const something = await doAsync();

    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

anotherAsync();
