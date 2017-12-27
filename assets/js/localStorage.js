"use strict";

// get list of shops in localStorage
const getLocalShops = () => {
    const localShops = localStorage.getItem("localShops");
    if (localShops) {
        return JSON.parse(localShops).shops;
    }
    return [];
};

// add shop to list of shops in localStorage
const addLocalShop = shop => {
    let localShops = getLocalShops();
    localShops.push(shop);
    localShops = {
        "shops": localShops
    };
    localStorage.setItem("localShops", JSON.stringify(localShops));
};

module.exports = {getLocalShops, addLocalShop};