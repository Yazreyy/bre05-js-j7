fetch("https://maridoucet.sites.3wa.io/user-api/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error(err));