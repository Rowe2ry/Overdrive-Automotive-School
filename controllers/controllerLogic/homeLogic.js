const renderHomePage = async (req,res)=> {
    try {
        const loggedIn = req.session.loggedIn;
        const userName = req.session.username;
        res.render('home', {loggedIn, userName});
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    renderHomePage
};