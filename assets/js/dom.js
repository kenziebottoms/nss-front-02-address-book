"use strict";

// flushes the toilet and repopulates all shops
const refreshShops = () => {
    // TOASK: doesn't work if the require is global
    const shopModule = require("./shops");

    // empty all pages
    $("#alpha-dir-tabContent .tab-pane").html("");
    // deactivate all tabs
    $("alpha-dir > a.nav-link").addClass("hidden");
    // hide all pages
    $("alpha-dir-tabContent > div").addClass("hidden");

    let shops = shopModule.getShops();
    shops.forEach((shop, index) => {
        addShop(shop);
        if (index == 0) {
            focusTab(shop.name);
        }
    });
};

// add shop to the DOM
const addShop = (shop) => {
    let letter = shop.name.substring(0,1).toLowerCase();
    let letterDiv = $(`#${letter}`);
    let letterTab = $(`#${letter}-tab`);
    letterDiv.append(getCard(shop));
    letterDiv.removeClass("hidden");
    letterTab.removeClass("hidden");
};

// focuses on tab that contains the shop called shopName
const focusTab = shopName => {
    let letter = shopName.substring(0,1).toLowerCase();

    // deactivate all pages
    $("#alpha-dir-tabContent > div").removeClass("show active");
    let letterDiv = $(`#${letter}`);
    // activate this page
    letterDiv.addClass("show active");

    // deactivate all tabs
    $("#alpha-dir > a").removeClass("active");
    // activate this tab
    let letterTab = $(`#${letter}-tab`);
    letterTab.addClass("active");
};

// add shop to search results
const addSearchResult = shop => {
    let card = getSearchCard(shop);
    $("#search-results").append(card);
};

// returns HTML string of card for tab pages
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

// returns HTML string of card for search results
const getSearchCard = shop => {
    return `<div class="card">
        <div class="py-5 card-img" style="background-image: url(${shop.img});">
        </div>
        <div class="card-body">
            <h4 class="card-title">${shop.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${shop.region}</h6>
        </div>
    </div>`;
};

// populate preview card with shop and show
const previewCard = shop => {
    $("#preview").html("");
    let card = getCard(shop);
    $("#preview").append(card);
};

// returns shop object from the contents of the preview form
const getShopFromForm = () => {
    let shop = {
        "name": $("#shop-name").val(),
        "region": $("#shop-region").val(),
        "desc": $("#shop-desc").val(),
        "phone": $("#shop-phone").val(),
        "maps": $("#shop-maps").val(),
        "website": $("#shop-website").val(),
        "img": $("#shop-img").val()
    };
    return shop;
};

module.exports = {refreshShops, addSearchResult, previewCard, getShopFromForm};