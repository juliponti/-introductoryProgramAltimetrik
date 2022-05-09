(() => {
  const $fetch = document.getElementById("fetch");
  $fragment = document.createDocumentFragment();

  // it is promise based mechanism
  // we add the endpoint, the default methods is GET
  // we can add and object specifyng another method with a second parameter of options

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(
      //gives a response and execute the success part if the promise is solve
      (res) => (res.ok ? res.json() : Promise.reject(res)) // this method force to break the promise and go to error
    )
    .then((json) => {
      // we receive the info in json
      console.log(json);

      json.forEach((el) => {
        // for each element create a li with the selected element information
        const $li = document.createElement("li");
        $li.innerHTML = `name: ${el.name}, Email: ${el.email}, Phone: ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch(
      // execute the negative part if there is an error
      (err) => {
        console.log(err);
        let menssage = err.statusText || "An error has occurred";
        $fetch.innerHTML = `Error ${err.status}: ${menssage}`;
      }
    )
    .finally(
      // we can add this to run something whether the promise is solved or not
      console.log("this will work either way")
    );
})();
