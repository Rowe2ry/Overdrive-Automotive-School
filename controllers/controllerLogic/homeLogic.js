const renderHomePage = async (req,res)=> {
    try {
        res.status(200).json('This is working');
        // const homePage = await res.render('home');
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    renderHomePage
};