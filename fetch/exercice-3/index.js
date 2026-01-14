let formData = new FormData();
formData.append('username', 'Marloon');
formData.append('firstName', "Marlonn");
formData.append('lastName', "Gillet");
formData.append('email', "marlonn.gillet@3wa.io");

let body = {
    method: 'POST',
    body: formData
};
let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/create-user"
);
fetch(url , {
method : "POST",
body : formData
})
.then(response => response.json())
.then(formData => console.log(formData))
.catch(err => console.error(err));
