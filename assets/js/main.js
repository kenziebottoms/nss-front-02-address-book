"use strict";

const shopModule = require("./shops");
const domController = require("./dom");
const eventController = require("./events");

const fetchShops = url => {
    let shopPromise = new Promise((resolve, reject) => {
        let shopRequest = new XMLHttpRequest();
        shopRequest.open("GET", url);
        shopRequest.onload = () => {
            if (shopRequest.status == 200) {
                resolve(shopRequest.response);
            } else {
                reject(shopRequest.statusText);
            }
        };
        shopRequest.onerror = () => {
            reject(shopRequest.statusText);
        };
        shopRequest.send();
    });
    return shopPromise;
};

const parseShops = data => {
    let shops = JSON.parse(data).shops;
    shops.forEach(shop => {
        shopModule.addShop(shop);
    });
    domController.refreshShops();
};

fetchShops("assets/json/shops.json").then(parseShops);
eventController.activateEventListeners();