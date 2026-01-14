function verifier(age){
    return new Promise ((resolve, reject) => {
        if(age >= 18){
            resolve("Autorisation Accordée !")
        	} else {
            reject("Autorisation refusé !")
            }
        });
    }

    verifier(42)
        .then((reponse) => {
          console.log("Test 42 ans :" , reponse);
    })
        .catch((erreur) => {
            console.log("Test 42 ans :" , erreur)
    });

    verifier(16)
    .then((reponse) => {
        console.log("Test 16 ans :" , reponse)
    })
    .catch((erreur) => {
        console.log("Test 16 ans :" , erreur)
    });