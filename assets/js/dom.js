"use strict";

const shopModule = require("./shops");

const refreshShops = () => {
    let tabContent = document.getElementById("alpha-dir-tabContent");
    let tabs = tabContent.children;
    [...tabs].forEach(tab => {
        tab.innerHTMl = "";
    });
    let shops = shopModule.getShops();
    shops.forEach((shop, index) => {
        addShop(shop, index);
    });
};

const addShop = (shop, index) => {
    let letter = shop.name.substring(0,1).toLowerCase();
    let letterDiv = document.getElementById(letter);
    let letterTab = document.getElementById(`${letter}-tab`);
    letterDiv.innerHTML += getCard(shop);
    letterDiv.classList.remove("hidden");
    letterTab.classList.remove("hidden");
    if (index == 0) {
        letterTab.classList += " active ";
        letterDiv.classList += " show active ";
    }
};

const getCard = shop => {
    return `<div class="card mb-3">
        <img class="card-img-top" src="${shop.img}">
        <div class="card-body">
            <h4 class="card-title">${shop.name}</h4>
            <h6 class="card-subtitle my-2 text-muted">${shop.region}</h6>
            <p class="card-text">${shop.desc}</p>
            <div class="card-text">
                <a class="card-link" target="blank" href="tel:${shop.phone}">Call</a>
                <a class="card-link" target="blank" href="${shop.maps}">Directions</a>
                <a class="card-link" target="blank" href="${shop.website}">Website</a>
            </div>
        </div>
    </div>`;
};

module.exports = {refreshShops};