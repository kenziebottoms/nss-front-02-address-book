"use strict";

const shopModule = require("./shops");
const domController = require("./dom");

// switch to search mode
const activateSearch = () => {
    // TODO: deactivate edit
    // activate search
    $('#search').on("keyup", search);
};

// switch to edit mode
const activateEdit = () => {
    // deactivate search
    $("#search").off("keyup", search);
    // activate edit
    $("#edit").on("click", event => {
        // TODO: show edit form
    });
};

// listens for edit/search buttons
const activateContentMode = () => {
    activateSearch();
    $('#content-mode label').on("click", event => {
        let mode = $(event.target).children("input").attr("id");
        if (mode == "edit") {
            activateEdit();
        } else {
            activateSearch();
        }
    });
};

// callback for event listener created in activateSearch()
const search = event => {
    let term = event.target.value.trim().toLowerCase();
    
    // update title
    $("#search-div h5").text(`Results for "${term}"`);
    // clear existing search results
    $("#search-results").html("");

    // if the term is a word, show results; if not, hide them
    if (term != undefined && term != "") {
        $("#search-div").removeClass("hidden");
    } else {
        $("#search-div").addClass("hidden");
    }

    // get and search shop list
    let shops = shopModule.getShops();
    let results = shops.filter(shop => shop.name.toLowerCase().includes(term));
    // if there are no results
    if (results.length == 0) {
        // try searching shop descriptions
        results = shops.filter(shop => shop.desc.toLowerCase().includes(term));  
    }
    // if there are still no results
    if (results.length == 0) {
        // try searching region names
        results = shops.filter(shop => shop.region.toLowerCase().includes(term));
    }

    // add each shop to #search-results
    $.each(results, (index, result) => {
        domController.addSearchResult(result);
    });
};

// initializer called in main()
const activateEventListeners = () => {
    activateContentMode();
};

module.exports = {activateEventListeners};