const express = require('express');
const { User } = require('../../models');

const getAllInsom = async (req,res) => {
    try {
        const allUsers = await User.findAll(
            { exclude: ['password']}
        );
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(400).jspon(err);
    };
};

const editUser = async (req,res) => {
    try {
        User.update(
            {
                id: req.body.id,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                accessLevel: req.body.access_level
            }
        );
    } catch (err) {
        res.status(400).json(err);
    };
};

const deleteUser = (req,res) => {
    try {
        User.destroy(
            {
                where: { id: req.params.id }
            }
        );
    } catch (err) {
        res.status(400).json(err);
    };
};

const renderLogInPage = (req,res) => {
    try {
        if (!req.session.logged_in) {
            res.render('login'); // login page
        } else {
            res.redirect('../../'); // out of account, out of api to home
        };
    } catch (err) {
        res.status(400).json(err);
    };
};

const renderRegistration = (req,res) => {
    try {
        if (!req.session.logged_in) {
            res.render('register');
        } else {
            res.redirect('../../')
        }
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
        if (!req.session.logged_in) {
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
        // console.log('login request made');
        // console.log(`req body looks like ${req.body.email}`);
        const userInfo = await User.findOne({ where: { email: req.body.email } });
        // console.log(`\n====== RAW ======\n ${userInfo}`);
        const thisUser = userInfo.get({plain:true});
        // console.log(`\n====== RAW ======\n ${thisUser}`);
        if (!thisUser) {
            console.log('couldnt find user');
            res.status(400).json('-user-Email or password was incorrect.');
        };
        const authenticate = await userInfo.auth(req.body.password);
        if (!authenticate) {
            console.log('couldn\'t authenticate password');
            res.status(400).json('-authenticate-Email or password was incorrect.');
        };
        req.session.save(() => {
            req.session.user_id = thisUser.id;
            req.session.username = thisUser.username;
            req.session.logged_in = true;
            req.session.access = thisUser.access_level;
            res.status(200).json('log in success!')
        });    
    } catch (err) {
        res.status(400).json(err);
    };
};

const updateAccount = (req,res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('./login');
        };
        if (!req.session.user_id) {
            res.status(500).json('Error recognizing account');
        }
        User.Update(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
            {
                where: { id: req.session.user_id },
        });
        res.status(200).json( { message: 'Account information successfully updated.'})
    } catch (err) {
        res.status(500).json(err);
    };
};

const logout = async (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    };
};

module.exports = {
    getAllInsom,
    editUser,
    deleteUser,
    renderLogInPage,
    renderRegistration,
    createNewAccount,
    renderAccountSettings,
    loginRequest,
    updateAccount,
    logout
};