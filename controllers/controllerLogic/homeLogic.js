const renderHomePage = async (req,res)=> {
    try {
        res.render('home', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    renderHomePage
};