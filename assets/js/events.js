"use strict";

const shopModule = require("./shops");
const domController = require("./dom");

const activateSearch = () => {
    $('#search').on("keyup", event => {
         search(event.target.value);
    });
};

const search = term => {
    $("#search-div h5").text(`Results for "${term}"`);
    $("#search-results").html("");
    if (term != "") {
        $("#search-div").removeClass("hidden");
    } else {
        $("#search-div").addClass("hidden");
    }
    let shops = shopModule.getShops();
    let results = shops.filter(shop => shop.name.toLowerCase().includes(term.toLowerCase()));
    $.each(results, (index, result) => {
        $("#search-results").append(result.name);
    });
};

const activateEventListeners = () => {
    activateSearch();
};

module.exports = {activateEventListeners};