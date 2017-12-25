"use strict";

const shopModule = require("./shops");
const domController = require("./dom");

const activateSearch = () => {
    $('#search').on("keyup", event => {
         search(event.target.value);
    });
    $('#clear-search').on("click", event => {
        $("#search").val("");
        search("");
    });
};

const search = term => {
    $("#search-div h5").text(`Results for "${term}"`);
    $("#search-results").html("");
    if (term != undefined && term != "") {
        $("#search-div").removeClass("hidden");
    } else {
        $("#search-div").addClass("hidden");
    }
    let shops = shopModule.getShops();
    let results = shops.filter(shop => shop.name.toLowerCase().includes(term.toLowerCase()));
    if (results.length == 0) {
        results = shops.filter(shop => shop.desc.toLowerCase().includes(term.toLowerCase()));        
    }
    if (results.length == 0) {
        results = shops.filter(shop => shop.region.toLowerCase().includes(term.toLowerCase()));        
    }
    $.each(results, (index, result) => {
        domController.addSearchResult(result);
    });
};

const activateEventListeners = () => {
    activateSearch();
};

module.exports = {activateEventListeners};