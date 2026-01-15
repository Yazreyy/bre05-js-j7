// Je déclare ma fonction d'utiliser une réduction par rapport à l'âge
function reduction(age){
    //Je retourne une nouvelle promesse qui inclue un r'esolve et un reject 
    return new promise((resolve, reject) => {
        // si l'age est en dessous de 25 je passe en resolve car y'a reduction jeune
        if(age < 25){
            resolve("Réductions jeunes !")
            // sinon si l'age est entre 25 et 65 ans je passe en reject car y'a aucune reductions
        } else if (age >= 25 && age <= 65){
            reject("Pas de réductions !")
            // et sinon il reste que au dessus de 65 et la c'est resolve car y'a une reduction
        	} else {
            resolve("Réductions Seniors !")
        }
    });
}