"use strict";

const shopModule = require("./shops");

const refreshShops = () => {
    let tabContent = document.getElementById("alpha-dir-tabContent");
    tabContent.innerHTML = "";
    let shops = shopModule.getShops();
    shops.forEach(shop => {
        tabContent.innerHTML += getCard(shop);
    });
};

const getCard = shop => {
    return `<div class="card">
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