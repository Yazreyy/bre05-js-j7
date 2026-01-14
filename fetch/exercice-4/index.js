let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/user/18"
);

fetch(url)
.then(response => response.json())
.then(data => {

    console.log(data)

    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    let h1Text = document.createTextNode(data.data.username);
    h1.appendChild(h1Text);
    let h2Text = document.createTextNode(data.data.firstName + " " + data.data.lastName)
    h2.appendChild(h2Text);
    let h3Text = document.createTextNode(data.data.email)
    h3.appendChild(h3Text);
    
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
})
.catch(err => console.error(err));