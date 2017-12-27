"use strict";

const domController = require("./dom");
const localStore = require("./localStorage");

// "global list"
let shops = [];

// add shop to global list
const addShop = shop => {
    shops.push(shop);
};

// get all shops, local and JSON, and sort them
const getShops = () => {
    let allShops = shops.slice();
    let localShops = localStore.getLocalShops();
    $.each(localShops, (index, element) => {
        allShops.push(element);
    });
    sortShops(allShops);
    return allShops;
};

// sort given list of shops alphabetically by name
const sortShops = shops => {
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

// retrieve shops from JSON and then parse them
const fetchShops = url => {
    retrieveShops("assets/json/shops.json").then(parseShops);
};

// sends the XHR and gives instructions on response
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

// adds each shop from JSON to the global list
const parseShops = data => {
    let shops = JSON.parse(data).shops;
    shops.forEach(shop => {
        addShop(shop);
    });
    domController.refreshShops();
};

module.exports = {addShop, getShops, fetchShops};