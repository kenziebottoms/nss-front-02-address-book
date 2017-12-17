"use strict";

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

module.exports = {addShop, getShops};