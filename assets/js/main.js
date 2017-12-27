"use strict";

const shopModule = require("./shops");
const eventController = require("./events");
shopModule.fetchShops("assets/json/shops.json");
eventController.activateEventListeners();