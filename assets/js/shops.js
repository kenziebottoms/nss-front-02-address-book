"use strict";

let shops = [];

const addShop = shop => {
    shops.push(shop);
};

const getShops = () => {
    return shops;
};

module.exports = {addShop, getShops};