const { User, Lesson, Category } = require('../../models');

const getAllLessons = async (req,res) => {
    try {
        const rawLessonData = await Lesson.findAll({
            include: [
                {
                    model: Category, 
                    attributes: ['name']
                }
            ]
        });
        const lessonData = await rawLessonData.map(lesson => lesson.get({ plain:true }));
        res.status(200).json(lessonData);
    } catch (err) {
        res.status(400).json(err);
    };
};

const viewOneLesson = async (req,res) => {
    try {
        const thisRawLesson = await Lesson.findByPk(req.params.id);
        const thisLesson = thisRawLesson.get({ plain:true });
        const userAccess = true // thisRawLesson.auth(req.session.access); // check user can access this lesson
        const userName = req.session.username;
        if (userAccess) {
                res.render('oneLesson', {
                thisLesson,
                userName,
                logged_in: req.session.logged_in
            });
        };
    } catch (err) {
        res.status(500).json(err);
    };
};

const addNewLesson = (req,res) => {
    try {
        Lesson.create(req.body);
        res.status(200).json('Lesson Added to the DB');
    } catch (err) {
        res.status(400).json(err);
    };
};

const editLesson = (req,res) => {
    try {
        const thisRawLesson = Lesson.update(
            {
                title: req.body.title,
                description: req.body.description,
                body1: req.body.body1,
                fig1: req.body.fig1,
                fig_caption1: req.body.fig_caption1,
                body2: req.body.body2,
                fig2: req.body.fig2,
                fig_caption2: req.body.fig_caption2,
                body3: req.body.body3,
                fig3: req.body.fig3,
                fig_caption3: req.body.fig_caption3,
                body4: req.body.body4,
                fig4: req.body.fig4,
                fig_caption4: req.body.fig_caption4,
                access_code: req.body.access_code,
                cat_id: req.body.cat_id
            },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json('Lesson updated');
    } catch (err) {
        res.status(400).json(err);
    };
};

const deleteLesson = (req,res) => {
    try {
        Lesson.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json('Lesson deleted');
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    getAllLessons,
    viewOneLesson,
    addNewLesson,
    editLesson,
    deleteLesson
};