function getPromise(num, message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, num);
  });
}


getPromise(5000, "hello").then(function (data) {
  console.log(data);
});