const router = require('express').Router();
// const apiRoutes = require('./api')
const homeLogic = require('./controllerLogic/homeLogic');

router.get('/', homeLogic.renderHomePage);

// router.use('/api', apiRoutes);

module.exports = router;