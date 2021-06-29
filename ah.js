// const fetch = require('node-fetch');

// Fetch Realm List and Allow User to Select Realm To Load Auction House Data From
const realmTest = [    // Realm Name = Realm Name, Realm Value = HTTPS for Realm from API
    {
        name: "Select A Realm",
        value: "List of Realms",
    },{
        name: "Area 52",
        value: "area_52",
    }, {
        name: "Emerald Dream",
        value: "emerald_dream",
    }, {
        name: "Illidan",
        value: "illidan",
    }, {
        name: "Stormrage",
        value: "stormrage",
    }, {
        name: "Garrosh",
        value: "garrosh",
    }, {
        name: "Kel'Thuzad",
        value: "kel_thuzad",
    },
];
let realmList = document.getElementById('realmSelect');
        // First Way
// for (let i = 0; i < realmTest.length; i++) {
//     let opt = document.createElement('option');
//     opt.value = realmTest[i].value;
//     opt.innerHTML = realmTest[i].name;
//     realmList.append(opt);
// };
        // Second Way
realmTest.forEach( realm => {
    let opt = document.createElement('option');
    opt.value = realm.value;
    opt.innerHTML = realm.name;
    realmList.append(opt);
})

// Fetch Auction House Data > Find Potion / Herb Buyout Cost > Store Cost Inside Arrays

// fetch('https://us.api.blizzard.com/data/wow/connected-realm/61/auctions?namespace=dynamic-us&locale=en_US&access_token=US7afc4J5SQofhf718YXaZyVKGc9DA7QW7')
//     .then(response => response.json())
//     .then(data => console.log(data));


// --- Array of Herb Objects

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
];

// --- Potion Cost Variables 
let marrowCost = herbs[0].cost;
let risingCost = herbs[1].cost;
let vigilCost = herbs[2].cost;
let widowCost = herbs[3].cost;
let deathCost = herbs[4].cost;
let nightCost = herbs[5].cost;

// --- Array of Potion Objects
const potions = [
    {
        name: "Flask of Power",
        id: 171276,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_flask_green.jpg",
        cost: 3005402,
        craftCost: nightCost * 3 + risingCost * 4 + marrowCost * 4 + widowCost * 4 + vigilCost * 4,
    },{
        name: "Phantom Fire",
        id: 171349,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_green.jpg",
        cost: 1057483,
        craftCost: marrowCost * 3 + risingCost * 3,
    },{
        name: "Empowered Exorcisms",
        id: 307381,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_pink.jpg",
        cost: 1230000,
        craftCost: marrowCost * 3 + widowCost * 3,
    },{
        name: "Deathly Fixation",
        id: 171351,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat1_yellow.jpg",
        cost: 1230000,
        craftCost:  widowCost * 3 + vigilCost * 3,
    },{
        name: "Spectral Agility",
        id: 171270,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_green.jpg",
        cost: 1230000,
        craftCost:  widowCost * 5,
    },{
        name: "Spectral Strength",
        id: 171275,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_yellow.jpg",
        cost: 1230000,
        craftCost: risingCost * 5,
    },{
        name: "Spectral Intellect",
        id: 171273,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_combat2_purple.jpg",
        cost: 1230000,
        craftCost: marrowCost * 5,
    },{
        name: "Hidden Spirit",
        id: 171266,
        img: "https://render-us.worldofwarcraft.com/icons/56/inv_alchemy_90_utility_red.jpg",
        cost: 1230000,
        craftCost: deathCost * 2 + risingCost * 3,
    },
];
// --- Start of Potion Section
const potionList_1 = document.getElementById("potionList_1");
const potionList_2 = document.getElementById("potionList_2");
const potName = [];
const potImg = [];
const potCost = [];  // - Once Fetch is Parsing Cost
const craftCost = [];

// --- Creates separate Arrays for Potion Name / Potion Image
potions.forEach(potion => {
    potName.push(potion.name);
    potImg.push(potion.img);
    potCost.push(potion.cost);
    craftCost.push(potion.craftCost);
})



// --- Places HTML for Lists --- Separates into 2 Columns for Styling. 
for (let i = 0; i < potName.length; i++) {
    let li = document.createElement('li');
    let liGold = document.createElement('li');
    let totalGold = intGold(potCost[i]);
    let craftTotalGold = intGold(craftCost[i]);
    let totalSilver = intSilver(potCost[i]);
    let craftTotalSilver = intSilver(craftCost[i]);
    li.innerHTML = '<img src="' + potImg[i] + '" class="icon">' + '<p1 class="objName">' + potName[i] + '</p1>';
    liGold.innerHTML = '<li class="gold">Material Cost: ' + craftTotalGold + '<img src="img/gold.png" class="coinImg">    ' + craftTotalSilver + '<img src="img/silver.png" class="coinImg"> | Buy Out: ' + totalGold + '<img src="img/gold.png" class="coinImg">    ' + totalSilver + '<img src="img/silver.png" class="coinImg"></li>';
    if ( i <  potName.length / 2) {
        potionList_1.append(li);
        potionList_1.append(liGold);
    } else {
        potionList_2.append(li);
        potionList_2.append(liGold);
    };
};

// --- Start of Herb Section ---
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

// ---  Herb List Loop
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

// --- Hide / Show divs
function openPage(evt, pageName) {
    let i, pageContent, link;
    pageContent = document.getElementsByClassName("pageContent");
    for (i = 0; i < pageContent.length; i++) {
      pageContent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
  };