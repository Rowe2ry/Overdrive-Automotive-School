const { Category, Lesson } = require('../../models');

const renderCatList = async (req,res) => {
    try {
        const rawCatData = await Category.findAll({
            include: [{ model: Lesson, attributes: ['Title', 'Description'] }]
        });
        const catData = await rawCatData.map(cat => cat.get({ plain:true }));
        res.render('categories', {catData});
    } catch (err) {
        res.status(400).json(err);
    };
};

const renderCatListInsom = async (req,res) => {
    try {
        const rawCatData = await Category.findAll({
            include: [{ model: Lesson, attributes: ['title', 'description'] }]
        });
        const catData = await rawCatData.map(cat => cat.get({ plain:true }));
        res.status(200).json(catData);
    } catch (err) {
        res.status(400).json(err);
    };
};

const viewOneCat = async (req,res) => {
    try {
        const thisRawCat = await Category.findByPk(req.params.id,
        {
               include: [{ model: Lesson, attributes: ['title', 'description'] }]
        });
        const thisCat = await thisRawCat.get({ plain: true });
        // res.status(200).json(thisCat);
        res.render('oneCat', { thisCat });
    } catch (err) {
        res.status(400).json(err);
    };
};

const addCat = (req,res) => {
    try {
        Category.create(req.body);
        res.status(200).json('Category Added');
    } catch (err) {
        res.status(400).json(err);
    };
};

const updateCat = (req,res) => {
    try {
        Category.update(
            { name: req.body.name },
            { where: { id: req.params.id } }
        );
        res.status(200).json('Category Updated');
    } catch (err) {
        res.status(400).json(err);
    };
};

const removeCat = (req,res) => {
    try {
        Category.destroy({ where: { id: req.params.id } });
        res.status(200).json('Category Removed')
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    renderCatList,
    renderCatListInsom,
    viewOneCat,
    addCat,
    updateCat,
    removeCat
};