const req = require('express/lib/request');
const { User } = require('../../models');

const renderLogInPage = async (req,res) => {
    try {
        if (!req.session.loggedIn) {
            res.render('login'); // login page
        } else {
            res.redirect('../../'); // out of account, out of api to home
        };
    } catch (err) {
        res.status(400).json(err);
    };
};
const createNewAccount = async (req,res) => {
    try {
        const newUser = User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    };
};
const renderAccountSettings = async (req,res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            const thisUser = await User.findOne({
                where: {
                    username: req.session.username 
                }
            });
            const parsedUser = thisUser.get({plain:true});
            res.render('accountSettings', {parsedUser}); // render the page for this user
        }
    } catch (err) {
        res.status(500).json(err);
    };
};
const loginRequest = async (req,res) => {
    try {
        const userInfo = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        const thisUser = userInfo.get({plain:true});
        if (!thisUser) {
            res.status(400).json({ message: 'Email or password was incorrect.'});
        };
        const authenticate = await thisUser.auth(req.body.password);
        if (!authenticate) {
            res.status(400).json({ message: 'Email or password was incorrect.'});
        };
        req.session.save(() => {
            req.session.user_id = thisUser.id;
            req.session.username = thisUser.username;
            req.session.loggedIn = true;
            req.session.access = thisUser.accessLevel;
        });
        res.status(200).json('log in success!')    
    } catch (err) {
        res.status(400).json(err);
    };
}
const updateAccount = (req,res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('./login');
        };
        if (!req.session.user_id) {
            res.status(500).json('Error recognizing account');
        }
        User.Update(
            {
                email: req.body.email,
                password: req.body.password
            },
            {
                where: {
                    id: req.session.user_id
                },
        });
        res.status(200).json( { message: 'Account information successfully updated.'})
    } catch (err) {
        res.status(500).json(err);
    };
};
const logOut = async (req,res => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    };
});

module.exports = {
    renderLogInPage,
    createNewAccount,
    renderAccountSettings,
    loginRequest,
    updateAccount,
    logout
};