"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('express').Router();
var authProtect = require('../middleware/authProtect').authProtect;
var ProfileController = require('../controllers/profile.controller').ProfileController;
var apiVersion = '/apiV1';
router.get('/profile/:id', authProtect, ProfileController.getProfile);
router.post('/update-pi', authProtect, ProfileController.updatePersonalInformation);
module.exports.initRoutes = function (app) {
    app.use("".concat(apiVersion, "/"), router);
};
//# sourceMappingURL=index.js.map