let user = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};

document.addEventListener("DOMContentLoaded", function(){
 let userstorage = sessionStorage.getItem("user");
 if(userstorage === null){
    sessionStorage.setItem("user", JSON.stringify(user));
    console.log("Données ' user ' crée dans le sessionStorage ");
 	} else {
    let userObj = JSON.parse(userstorage);
    console.log("l'utilisateur existe déja :" , userObj.firstName)
 }
});