(() => {
  const xhr = new XMLHttpRequest(), // first we create a variable for the object
    $xhr = document.getElementById("xhr"), // all variables that starts with "$" refers to a DOM element
    $fragment = document.createDocumentFragment();

  // second, we execute an event
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return; // only execute when the ready stateis 4 which means is complete
    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("success");
      let json = JSON.parse(xhr.responseText); // we need to parse the JSON to show it in the dom
      console.log(json);

      json.forEach((el) => {
        // for each js element
        const $li = document.createElement("li"); // create a li
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; // choose the element features we want to show
        $fragment.appendChild($li); // save the li in a fragment
      });

      $xhr.appendChild($fragment); // put that fragment inside the ol
    } else {
      console.log("error");
      let message = xhr.statusText || "An error has occurred"; // we have to specify a menssage in case the satus text is empty
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`; // we need to show in the dom if an error has occurred
    }
    console.log("this menssage will load either way");
  });

  // third, we open the request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // the first parameter is the communication method and the second is the url in which we're going to do the request (endpoint)

  // fourth, we send the request
  xhr.send();
})();
