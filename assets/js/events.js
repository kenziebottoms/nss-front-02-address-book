"use strict";

const shopModule = require("./shops");
const domController = require("./dom");

// switch to search mode
const activateSearch = () => {
    // TODO: deactivate add
    // activate search
    $('#search').on("keyup", search);
    search();
};

// switch to add mode
const activateAdd = () => {
    // deactivate and search and results
    $("#search").off("keyup", search);
    $("#search-div").addClass("hidden");
    // show add form
    $("#add-div").removeClass("hidden");
    // activate add button
    $("#add").on("click", event => {
    });
};

// listens for add/search buttons
const activateContentMode = () => {
    // start off searching
    activateSearch();
    // add add/search event listeners
    $('#content-mode label').on("click", event => {
        $("#search").val("");
        let mode = $(event.target).children("input").attr("id");
        if (mode == "add") {
            activateAdd();
        } else {
            activateSearch();
        }
    });
};

// callback for event listener created in activateSearch()
const search = () => {
    let term = $("#search").val().trim().toLowerCase();
    
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
    if (results.length == 0) {
        $("#search-results").append("No results.");
    }

    // add each shop to #search-results"
    $.each(results, (index, result) => {
        domController.addSearchResult(result);
    });
};

// initializer called in main()
const activateEventListeners = () => {
    activateContentMode();
};

module.exports = {activateEventListeners};