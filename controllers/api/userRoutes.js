const router = require('express').Router();
const { User } = require('../../models');

router.get('/settings', (req,res) =>{
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            res.render('accountSettings');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req,res) => {
    try {
        const userInfo = await User
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;