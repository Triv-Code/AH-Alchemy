const fetch = require('node-fetch');
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
// Loop for Fetching AH Price for Potions & Updating potions Array
for (let i = 0; i < 8; i++ ) {
    fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US9X229iJ6N9vSMMYwldID03B2jvdrMFxx')
            .then(response => response.json())
            .then(data => data.auctions.filter((auction) => auction.item.id === potions[i].id ))       // Find item by ID
            .then(data => data.map((cost) => cost.unit_price))                                         // Find Array of Prices
            .then(data => Math.min(...data))                                                           // Find Lowest Price in Array
            .then(data => potions[i].cost = data)                                                      // Log that Price
            .then(data => logPot())                                                                    // Call Function for innerHTML
};
// Logging Function to test Array Update
function logPot() {
    for (let i = 0; i < 8; i++) {
        console.log(potions[i]);
    };
};