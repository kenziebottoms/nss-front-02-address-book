"use strict";

const getLocalShops = () => {
    const localShops = localStorage.getItem("localShops");
    if (localShops) {
        return JSON.parse(localShops).shops;
    }
    return [];
};

const addLocalShop = shop => {
    let localShops = getLocalShops();
    localShops.push(shop);
    localShops = {
        "shops": localShops
    };
    localStorage.setItem("localShops", JSON.stringify(localShops));
};

module.exports = {getLocalShops, addLocalShop};