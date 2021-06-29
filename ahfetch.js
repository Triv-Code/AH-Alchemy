const fetch = require('node-fetch');

fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US7afc4J5SQofhf718YXaZyVKGc9DA7QW7')
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => console.log(data.auctions.filter((auction) => auction.item.id === 171276 )));