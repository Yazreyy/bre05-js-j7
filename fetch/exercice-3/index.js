let formData = new FormData();
formData.append('username', "Votre surnom");
formData.append('firstName', "Votre prénom");
formData.append('lastName', "Votre nom");
formData.append('email', "Votre email 3WA");

let body = {
    method: 'POST',
    body: formData
};
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);
fetch(url , {
method : "POST",
headers : {"Content-Type":"application/json"},
body : formData
})
.then(response => response.json())
.then(formData => console.log(formData))
.catch(err => console.error(err));
