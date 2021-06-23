const fetch = require('node-fetch');
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
        name: "Potion of Phantom Fire",
        id: 171349,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_green.jpg",
    },{
        name: "Potion of Empowered Exorcisms",
        id: 307381,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_pink.jpg",
    },{
        name: "Potion of Deathly Fixation",
        id: 171351,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_yellow.jpg",
    },{
        name: "Potion of Spectral Agility",
        id: 171270,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_green.jpg",
    },{
        name: "Potion of Spectral Strength",
        id: 171275,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_yellow.jpg",
    },{
        name: "Potion of Spectral Intellect",
        id: 171273,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_purple.jpg",
    },{
        name: "Potion of Hidden Spirit",
        id: 171266,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_utility_red.jpg",
    },
]

fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US5MdIaBbE5FedcA7R4d6HP2256fe2kFBQ')
    .then(response => response.json())
    .then(data => console.log(data))

// herbs.forEach(herb => console.log(herb.name + " " + herb.id));

// herbs.forEach(herb => {
//     const herbName = herb.name;
//     const herbImg = '<img src='+ herb.img +'></img>';
//     const d1 = document.getElementsByTagName('div');
//     document.body.innerHTML = herbImg + herbName;
//     console.log('huh?');
// })

// herbs.forEach(herb => {
//     const herbName = herb.name;
//     const herbImg = '<img src='+ herb.img +'></img>';
//     const d1 = document.getElementById("here");
//     d1.insertAdjacentHTML('afterbegin', herbImg + herbName);
// })