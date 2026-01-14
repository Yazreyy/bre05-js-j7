fetch("https://jsonplaceholder.typicode.com/users")
  .then(reponse => reponse.json())
  .then(data => console.log(data[2].name));