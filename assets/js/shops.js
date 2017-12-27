"use strict";

const domController = require("./dom");

let shops = [];

const addShop = shop => {
    shops.push(shop);
};

const getShops = () => {
    sortShops();
    return shops;
};

const sortShops = () => {
    shops.sort((a,b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if (aName < bName) {
            return -1;
        } else if (aName > bName) {
            return 1;
        } else {
            return 0;
        }
    });
};

const fetchShops = url => {
    retrieveShops("assets/json/shops.json").then(parseShops);
};

const retrieveShops = url => {
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
        addShop(shop);
    });
    domController.refreshShops();
};

module.exports = {addShop, getShops, fetchShops};