"use strict";

const shopModule = require("./shops");
const eventController = require("./events");
const localStore = require("./localStorage");

localStore.init();
shopModule.fetchShops("assets/json/shops.json");
eventController.activateEventListeners();