const router = require('express').Router();
const userLogic = require('../controllerLogic/userLogic');

router.get('/login', userLogic.renderLogInPage); // login page
router.post('/register', userLogic.createNewAccount) // create new account
router.post('/login', userLogic.loginRequest); // login request
router.get('/settings', userLogic.renderAccountSettings); //account settings page
router.put('/settings', userLogic.updateAccount); // change account settings
router.post('/logout', userLogic.logout); // logout request

module.exports = router;