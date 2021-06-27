// const fetch = require('node-fetch');
const herbs = [
    {
        name: "Marrowroot", 
        id: 168589,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_marrowroot.jpg",
        cost: 754400
    },{
        name: "Rising Glory", 
        id: 168586,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_risingglory.jpg",
        cost: 821100
    },{
        name: "Vigil's Torch", 
        id: 170554,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_ardenweald.jpg",
        cost: 432100
    },{
        name: "Widowbloom", 
        id: 168583,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_bloodcup.jpg",
        cost: 187000
    },{
        name: "Death Blossom", 
        id: 169701,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_deathblossom.jpg",
        cost: 650047
    },{
        name: "Nightshade", 
        id: 171315,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_misc_herb_nightshade.jpg",
        cost: 247508
    },
]
const potions = [
    {
        name: "Flask of Power",
        id: 171276,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_flask_green.jpg",
        cost: 3005402,
    },{
        name: "Phantom Fire",
        id: 171349,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_green.jpg",
        cost: 1057483
    },{
        name: "Empowered Exorcisms",
        id: 307381,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_pink.jpg",
        cost: 1230000
    },{
        name: "Deathly Fixation",
        id: 171351,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_yellow.jpg",
        cost: 1230000
    },{
        name: "Spectral Agility",
        id: 171270,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_green.jpg",
        cost: 1230000
    },{
        name: "Spectral Strength",
        id: 171275,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_yellow.jpg",
        cost: 1230000
    },{
        name: "Spectral Intellect",
        id: 171273,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_purple.jpg",
        cost: 1230000
    },{
        name: "Hidden Spirit",
        id: 171266,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_utility_red.jpg",
        cost: 1230000
    },
]
//Potion of 
// fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US4CxB6WJpAm41lbq0DO8nUbQx0QsA5dmA')
//     .then(response => response.json())
//     .then(data => console.log(data.auctions))

// --- Start of Potion Section
const potionList_1 = document.getElementById("potionList_1");
const potionList_2 = document.getElementById("potionList_2");
const potName = [];
const potImg = [];
const potCost = []; // - Once Fetch is Parsing Cost
// --- Creates separate Arrays for Potion Name / Potion Image
potions.forEach(potion => {
    potName.push(potion.name);
    potImg.push(potion.img);
    potCost.push(potion.cost);
})
// --- Places HTML for Lists --- Separates into 2 Columns for Styling. 
for (let i = 0; i < potName.length; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let liGold = document.createElement('li');
    let totalGold = intGold(potCost[i]);
    let totalSilver = intSilver(potCost[i]);
    li.innerHTML = '<img src="' + potImg[i] + '" class="icon">' + '<p1 class="objName">' + potName[i] + '</p1>';
    liGold.innerHTML = '<li class="gold">Material Cost: ' + totalGold + '<img src="img/gold.png" class="coinImg">    ' + totalSilver + '<img src="img/silver.png" class="coinImg"> | Buy Out: 354<img src="img/gold.png" class="coinImg"> 78<img src="img/silver.png" class="coinImg"></li>';
    if ( i <  potName.length / 2) {
        potionList_1.append(li);
        potionList_1.append(liGold);
    } else {
        potionList_2.append(li);
        potionList_2.append(liGold);
    };
};
// --- Start of Herb Section
const herbList_1 = document.getElementById("herbList_1");
const herbList_2 = document.getElementById("herbList_2");
const herbName = [];
const herbImg = [];
const herbCost = [];
// --- Creates separate Arrays for Herb Name / Herb Image
herbs.forEach(herb => {
    herbName.push(herb.name);
    herbImg.push(herb.img);
    herbCost.push(herb.cost);
})
// --- Herb List Loop
for (let i = 0; i < herbName.length; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let liGold = document.createElement('li');
    let totalGold = intGold(herbCost[i]);
    let totalSilver = intSilver(herbCost[i]);
    li.innerHTML = '<img src="' + herbImg[i] + '" class="icon">' + '<p1 class="objName">' + herbName[i] + '</p1>';
    liGold.innerHTML = '<li class="gold">Cost Per Herb:: ' + totalGold + '<img src="img/gold.png" class="coinImg">    ' + totalSilver + '<img src="img/silver.png" class="coinImg"></li>';
        if ( i < herbName.length / 2) {
            herbList_1.append(li);
            herbList_1.append(liGold);
        } else {
            herbList_2.append(li);
            herbList_2.append(liGold);
        };
}

// --- Functions to Change Int to Currency
function intGold(num) {
    gold = num / 10000;
    gold = Math.floor(gold);
    return gold;
};
function intSilver(num) {
    num = num.toString();
    num = num.slice(-4);
    silver = num.substring(0,2);
    return silver
};
function intCopper(num) {
    num = num.toString();
    copper = num.slice(-2);
    return copper
};

// potions.forEach(potion => {
//     let finalGold = intGold(potion.cost);
//     console.log(finalGold);
//     let finalSilver = intSilver(potion.cost);
//     console.log(finalSilver);
//     let finalCopper = intCopper(potion.cost);
//     console.log(finalCopper);
// })

// --- Hide / Show divs
function openPage(evt, pageName) {
    let i, pageContent, link;
    pageContent = document.getElementsByClassName("pageContent");
    for (i = 0; i < pageContent.length; i++) {
      pageContent[i].style.display = "none";
    }
    link = document.getElementsByClassName("link");
    for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "flex";
    evt.currentTarget.className += " active";
  }