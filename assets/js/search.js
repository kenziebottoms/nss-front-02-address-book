"use strict";

const search = term => {
    $('#search-div h5').text(`Results for '${term}'`);
    if (term != "") {
        $('#search-div').removeClass("hidden");
    } else {
        $('#search-div').addClass("hidden");
    }
};

module.exports = {search};