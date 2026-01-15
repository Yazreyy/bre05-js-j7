let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);
// je recupere les datas avec la methode GET
fetch(url)
// quand c'est fait je les transforme en json
.then(response => response.json())
// ensuite sur ces données je fait plusieurs manips 
.then(data => {
     // je recupere les données qui sont dans un data dans un autre data
const utilisateurs = data.data


// je crée le corps de mon tableau 
const tbody = document.createElement('tbody')
// je boucle dans ce tableau pour trouver les utilisateurs 
for (let i = 0 ; i < utilisateurs.length ; i++){
    // je crée les celulles et les nommes
    const tr = document.createElement('tr')
    const tdUsername = document.createElement('td');
    const tdFirstName = document.createElement('td');
    const tdLastName = document.createElement('td');
    const tdEmail = document.createElement('td');
    // je leur donne des propriétés 
    tdUsername.style.border = '1px solid black';
    tdUsername.style.padding = '8px';
    tdFirstName.style.border = '1px solid black';
    tdFirstName.style.padding = '8px';
    tdLastName.style.border = '1px solid black';
    tdLastName.style.padding = '8px';
    tdEmail.style.border = '1px solid black';
    tdEmail.style.padding = '8px';
    
    // je fait apparaître le texte qui est i pour chaque objet du tableau
    tdUsername.appendChild(document.createTextNode(utilisateurs[i].username));
    tdFirstName.appendChild(document.createTextNode(utilisateurs[i].firstName));
    tdLastName.appendChild(document.createTextNode(utilisateurs[i].lastName));
    tdEmail.appendChild(document.createTextNode(utilisateurs[i].email));
    
   // je les ajoute dans chaque element
    tr.appendChild(tdUsername);
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);
    // je rajoute le corps du tableau
    tbody.appendChild(tr);
}
// je crée mon tableau et lui donne un style
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.border = '1px solid black';
//je met mon corps de tableau dans le tableau dans mon html
table.appendChild(tbody);
//je met mon tableau dans mon hmtl 
document.body.appendChild(table)

})

.catch(err => console.erorr(err));