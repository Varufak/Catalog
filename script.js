let priceList = [
    {name: 'Молоко', price: '79'},
    {name: 'Яйца', price: '49'},
    {name: 'Хлеб', price: '56'},
    {name: 'Чебупели', price: '169'}
]

let milk = priceList[0].name;
let eggs = priceList[1].name;
let bread = priceList[2].name;
let chebupels = priceList[3].name;
let milkPrice = priceList[0].price;
let eggsPrice = priceList[1].price;
let breadPrice = priceList[2].price;
let chebupelsPrice = priceList[3].price;


document.addEventListener("DOMContentLoaded", ready);

function ready() {
    document.querySelector('#milk').innerHTML = milk;
    document.querySelector('#eggs').innerHTML = eggs;
    document.querySelector('#bread').innerHTML = bread;
    document.querySelector('#chebupels').innerHTML = chebupels;
    document.querySelector('#milkPrice').innerHTML = milkPrice;
    document.querySelector('#eggsPrice').innerHTML = eggsPrice;
    document.querySelector('#breadPrice').innerHTML = breadPrice;
    document.querySelector('#chebupelsPrice').innerHTML = chebupelsPrice;
}


document.querySelector('#milkButton').addEventListener('click', addMilk);
document.querySelector('#eggsButton').addEventListener('click', addEggs);
document.querySelector('#breadButton').addEventListener('click', addBread);
document.querySelector('#chebupelsButton').addEventListener('click', addChebupels);