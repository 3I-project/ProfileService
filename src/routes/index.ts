import {Express} from "express";
const router = require('express').Router()

const { authProtect } = require('../middleware/authProtect')
const { ProfileController } = require('../controllers/profile.controller')

const apiVersion = '/apiV1'

router.get('/profile/:id', authProtect, ProfileController.getProfile);
router.post('/update-pi', authProtect, ProfileController.updatePersonalInformation);

module.exports.initRoutes = (app: Express) => {
 app.use(`${apiVersion}/`, router)
}
