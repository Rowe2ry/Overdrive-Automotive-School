const renderHomePage = async (req,res)=> {
    try {
        const homePage = await res.render('home');
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    renderHomePage
};