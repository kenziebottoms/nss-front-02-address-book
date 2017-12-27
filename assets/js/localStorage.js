"use strict";

const getLocalShops = () => {
    const localShops = localStorage.getItem("localShops");
    if (localShops) {
        return JSON.parse(localShops).shops;
    }
    return false;
};

module.exports = {getLocalShops};