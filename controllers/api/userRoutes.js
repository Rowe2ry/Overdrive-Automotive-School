const router = require('express').Router();
const userLogic = require('../controllerLogic/userLogic');

router.get('/', userLogic.getAllInsom); // view all users (ADMIN INSOMNIA)
router.put('/:id', userLogic.editUser); // edit a user (ADMIN INSOMNIA)
router.delete('/:id', userLogic.deleteUser); // (ADMIN INSOMNIA)

router.get('/login', userLogic.renderLogInPage); // login page
router.get('register', userLogic.renderRegistration); // registration page
router.post('/register', userLogic.createNewAccount) // create new account
router.post('/login', userLogic.loginRequest); // login request
router.get('/settings', userLogic.renderAccountSettings); //account settings page
router.put('/settings', userLogic.updateAccount); // change account settings
router.post('/logout', userLogic.logout); // logout request

module.exports = router;