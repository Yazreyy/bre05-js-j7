let url = "https://corsproxy.io/?" + encodeURIComponent(
    "https://maridoucet.sites.3wa.io/user-api/users"
);

fetch(url)
.then(response => response.JSON())
.then(date => console.log(date))
.catch(err => console.error(err));