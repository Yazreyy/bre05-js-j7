let data = {
    firstName : "Harry",
    lastName : "Bow",
    motto : "C'est beau la vie !"
};
let datastring = JSON.stringify(data);
console.log(datastring);
let str = "{\"firstName\":\"Colonel\",\"lastName\":\"Sanders\",\"motto\":\"Il est bon mon poulet\"}";
let st = JSON.parse(str);
console.log(st);
document.addEventListener("DOMContentLoaded", function(){

});