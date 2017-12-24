"use strict";

const searcher = require("./search");

const activateSearch = () => {
    $('#search').on("keyup", event => {
         searcher.search(event.target.value);
    });
};

const activateEventListeners = () => {
    activateSearch();
};

module.exports = {activateEventListeners};