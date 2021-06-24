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

// fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US5MdIaBbE5FedcA7R4d6HP2256fe2kFBQ')
//     .then(response => response.json())
//     .then(data => console.log(data))

const list = document.getElementById("myList");

potions.forEach(potion => {
    let li = document.createElement('li');
    let img = document.createElement('img');
        img.src = potion.img;
    let liGold = document.createElement('li');
    li.innerHTML = '<img src="' + potion.img + '" class="icon">' + '<p1 class="objName">' + potion.name + '</p1>';
    list.append(li);
    liGold.innerHTML = '<li class="gold">Crated Yourself: 300g 25s | Buy Out: 354g 78s</li>';
    list.append(liGold);
})


// ================================================================= For Loop To Make 2 Columns? 
// for (let i = 0; i < 4; i++) {
//     let li = document.createElement('li');
//     let img = document.createElement('img');
//         img.src = potions.img;
//     let liGold = document.createElement('li');
//     li.innerHTML = '<img src="' + potions.img + '" class="icon">' + '<p1 class="objName">' + potions.name + '</p1>';
//     list.append(li);
//     liGold.innerHTML = '<li class="gold">Crated Yourself: 300g 25s | Buy Out: 354g 78s</li>';
//     list.append(liGold);
// }