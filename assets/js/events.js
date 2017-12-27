"use strict";

const shopModule = require("./shops");
const domController = require("./dom");

const activateSearch = () => {
    deactivateAdd();
    $('#search').on("keyup", searchListener);
    $("#search-div").removeClass("hidden");
    searchListener();
};
const deactivateSearch = () => {
    $("#search").off("keyup", searchListener);
    $("#search-div").addClass("hidden");
};

const activateAdd = () => {
    deactivateSearch();
    $("#add-div").removeClass("hidden");
    $("#add-div").on("click", addListeners);
    $("#shop-name").val($("#search").val());
    $("#search").val("");
    $("#shop-name").focus();
};
const deactivateAdd = () => {
    $("#add-div").addClass("hidden");
    $("#add-div").off("click", addListeners);
};

// listeners attached to the add form
const addListeners = event => {
    let id = $(event.target).attr("id");
    if (id == "add-preview") {
        previewButtonHandler();
    } else if (id == "add-save-cancel") {
        previewCancelHandler();
    }
    // TODO: submit preview button
};

// listens for clicks on the preview buttons
const previewButtonHandler = () => {
    // TODO: deal with empty forms
    if ($("#add-preview").hasClass("disabled")) {

    } else {
        let shop = {
            "name": $("#shop-name").val(),
            "region": $("#shop-region").val(),
            "desc": $("#shop-desc").val(),
            "phone": $("#shop-phone").val(),
            "maps": $("#shop-maps").val(),
            "website": $("#shop-website").val(),
            "img": $("#shop-img").val()
        };
        domController.previewCard(shop);
        $("#preview-div").removeClass("hidden");
        $("#add-form").addClass("hidden");
    }
};

// clears the preview and focuses on the form
const previewCancelHandler = () => {
    $("#preview").html("");
    $("#preview-div").addClass("hidden");
    $("#add-form").removeClass("hidden");
    $("#shop-name").focus();
};

// listens for add/search mode buttons
const activateContentMode = () => {
    // start off searching
    activateSearch();
    // add add/search event listeners
    $('#content-mode label').on("click", event => {
        let mode = $(event.target).children("input").attr("id");
        if (mode == "add") {
            // dumb fix for focus on click
            setTimeout(activateAdd, 0);
        } else {
            activateSearch();
        }
    });
};

// callback for event listener created in activateSearch()
const searchListener = () => {
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