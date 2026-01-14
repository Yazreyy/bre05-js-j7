window.addEventListener("DOMContentLoaded", function(){
let username = sessionStorage.getItem("username");

if (username === null) {
        let response = window.prompt("Quel est votre nom ?");
        
        if (response) {
            sessionStorage.setItem("username", response);
        }
    } 
    else {
        window.alert("Bienvenue  " + username);
    }
});