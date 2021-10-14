const { url } = require('inspector');
const fetch = require('node-fetch');

// Array of Herb Objects
const herbs = [
    {
        name: "Marrowroot", 
        id: 168589,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_marrowroot.jpg",
    },{
        name: "Rising Glory", 
        id: 168586,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_risingglory.jpg",
    },{
        name: "Vigil's Torch", 
        id: 170554,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_ardenweald.jpg",
    },{
        name: "Widowbloom", 
        id: 168583,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_bloodcup.jpg",
    },{
        name: "Death Blossom", 
        id: 169701,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_deathblossom.jpg",
    },{
        name: "Nightshade", 
        id: 171315,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_nightshade.jpg",
    },
];

// Array of Potion Objects
const potions = [
    {
        name: "Flask of Power",
        id: 171276,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_flask_green.jpg",
        // craftCost: nightCost * 3 + risingCost * 4 + marrowCost * 4 + widowCost * 4 + vigilCost * 4,
    },{
        name: "Phantom Fire",
        id: 171349,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_green.jpg",
        // craftCost: marrowCost * 3 + risingCost * 3,
    },{
        name: "Empowered Exorcisms",
        id: 171352,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_pink.jpg",
        // craftCost: marrowCost * 3 + widowCost * 3,
    },{
        name: "Deathly Fixation",
        id: 171351,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_yellow.jpg",
        // craftCost:  widowCost * 3 + vigilCost * 3,
    },{
        name: "Spectral Agility",
        id: 171270,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_green.jpg",
        // craftCost:  widowCost * 5,
    },{
        name: "Spectral Strength",
        id: 171275,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_yellow.jpg",
        // craftCost: risingCost * 5,
    },{
        name: "Spectral Intellect",
        id: 171273,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_purple.jpg",
        // craftCost: marrowCost * 5,
    },{
        name: "Hidden Spirit",
        id: 171266,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_utility_red.jpg",
        // craftCost: deathCost * 2 + risingCost * 3,
    },
];

//  This would call the API multiple times.... 
// for (let i = 0; i < 8; i++ ) {
//     fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US7ojuxwdmAtxfikgsR4Zu4b68IM8rd1li')
//             .then(response => response.json())
//             .then(data => data.auctions.filter((auction) => auction.item.id === potions[i].id ))
//             .then(data => data.map((cost) => cost.unit_price))
//             .then(data => Math.min(...data))
//             .then(data => potions[i].cost = data)
// };

// If the API is stored inside a variable, is it only ran once, regardless of how many times you call the variable? 
ahData = fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US7ojuxwdmAtxfikgsR4Zu4b68IM8rd1li')
            .then(response => response.json())
// Potions Cost Update
for (let i = 0; i < potions.length; i++ ) {
    ahData
        .then(data => data.auctions.filter((auction) => auction.item.id === potions[i].id ))
        .then(data => data.map((cost) => cost.unit_price))
        .then(data => Math.min(...data))
        .then(data => potions[i].cost = data)
}
// Herbs Cost Update
for (let i = 0; i < herbs.length; i++ ) {
    ahData
        .then(data => data.auctions.filter((auction) => auction.item.id === herbs[i].id ))
        .then(data => data.map((cost) => cost.unit_price))
        .then(data => Math.min(...data))
        .then(data => herbs[i].cost = data)
}


setTimeout(() => {
    // let marrowCost = herbs[0].cost;
    // let risingCost = herbs[1].cost;
    // let vigilCost = herbs[2].cost;
    // let widowCost = herbs[3].cost;
    // let deathCost = herbs[4].cost;
    // let nightCost = herbs[5].cost;
    potions[0].craftCost = herbs[5].cost * 3 +  herbs[1].cost * 4 + herbs[0].cost * 4 +  herbs[3].cost * 4 +  herbs[2].cost * 4;
    potions[1].craftCost = herbs[0].cost * 3 +  herbs[1].cost * 3;
    potions[2].craftCost = herbs[0].cost * 3 +  herbs[3].cost * 3;
    potions[3].craftCost = herbs[3].cost * 3 +  herbs[2].cost * 3;
    potions[4].craftCost = herbs[3].cost * 5;
    potions[5].craftCost = herbs[1].cost * 5;
    potions[6].craftCost = herbs[0].cost * 5;
    potions[7].craftCost = herbs[4].cost * 2 +  herbs[1].cost * 3;

    console.log(potions)
}, 5000);