// const fetch = require('node-fetch');
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
]
const potions = [
    {
        name: "Flask of Power",
        id: 171276,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_flask_green.jpg",
    },{
        name: "Phantom Fire",
        id: 171349,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_green.jpg",
    },{
        name: "Empowered Exorcisms",
        id: 307381,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_pink.jpg",
    },{
        name: "Deathly Fixation",
        id: 171351,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_yellow.jpg",
    },{
        name: "Spectral Agility",
        id: 171270,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_green.jpg",
    },{
        name: "Spectral Strength",
        id: 171275,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_yellow.jpg",
    },{
        name: "Spectral Intellect",
        id: 171273,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_purple.jpg",
    },{
        name: "Hidden Spirit",
        id: 171266,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_utility_red.jpg",
    },
]
//Potion of 
// fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US4CxB6WJpAm41lbq0DO8nUbQx0QsA5dmA')
//     .then(response => response.json())
//     .then(data => console.log(data.auctions))

// --- ID's for List Columns 1/2
const list = document.getElementById("myList");
const listTwo = document.getElementById("secList");
// --- Arrays for Potion Name / Potion Image
const potName = [];
const potImg = [];
const potCost = []; // - Once Fetch is Parsing Cost
// --- Creates separate Arrays for Potion Name / Potion Image
potions.forEach(potion => {
    potName.push(potion.name);
    potImg.push(potion.img);
})
// --- Places HTML for Lists --- Separates into 2 Columns for Styling. 
for (let i = 0; i < 8; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let liGold = document.createElement('li');
    li.innerHTML = '<img src="' + potImg[i] + '" class="icon">' + '<p1 class="objName">' + potName[i] + '</p1>';
    liGold.innerHTML = '<li class="gold">Material Cost: 300<img src="img/gold.png" class="coinImg"> 25<img src="img/silver.png" class="coinImg"> | Buy Out: 354<img src="img/gold.png" class="coinImg"> 78<img src="img/silver.png" class="coinImg"></li>';
    if ( i < 4) {
        list.append(li);
        list.append(liGold);
    } else {
        listTwo.append(li);
        listTwo.append(liGold);
    };
};
// --- Changes AH Buyout into Gold/Silver/Copper 
let gold = '';
let silver = '';
let copper = '';
function currency(num) {
    num = num.toString();
    copper = num.slice(-2);
    silver = num.slice(-4);
    silver = silver.substring(0,2);
    gold = num / 10000;
    gold = Math.floor(gold);
    return copper;
    return silver;
    return gold;
};