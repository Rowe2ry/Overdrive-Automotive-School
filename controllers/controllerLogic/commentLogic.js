const res = require('express/lib/response');
const { User, Lesson, Comment } = require('../../models');

const viewAllComs = async (req,res) => {
    try {
        const allComs = await Comment.findAll();
        res.status(200).json(allComs);
    } catch (err) {
        res.status(400).json(err);
    };
};

const viewLessonComs = async (req,res) => {
    try {
        const lessonRawComs = await Comment.findAll(
            { include: [{ model: Lesson, attributes:['title'] }]},
            { where: { lesson_id: req.params.id } });
        const lessonComs = await lessonRawComs.map(com => com.get({ plain:true }));
        res.render('allComments', {lessonComs});
    } catch (err) {
        res.status(400).json(err);
    };
};

const postComment = async (req,res) => {
    const newComment = await Comment.create(
        {
            body: req.body.body,
            lesson_id: req.params.id,
            user_id: req.session.user_id
        }
    );
    res.redirect('/'); // TODO: verify this is a relative path and it is reloading the comments page for the lesson with this comment added. if it goes back to root, try `/api/comments/${req.params.id}`
};

const editCom = async (req,res) => {
    try {
        const targetComment = await Comment.findByPk();
        const thisLesson = targetComment.lesson_id;
        const thisCom = await Comment.update(
            { body: req.body.body,},
            { where: { id: req.params.id } }
        );
        res.redirect(`../${thisLesson}`); //up one level from req.params with comment id, then back down with lesson id
    } catch (err) {
        res.status(400).json(err);
    };
};

const deleteCom = async (req,res) => {
    try {
        const targetComment = await Comment.findByPk();
        const thisLesson = targetComment.lesson_id;
        const thisCom = await Comment.destroy({ where: { id: req.params.id } });
        res.redirect(`../${thisLesson}`); //up one level from req.params with comment id, then back down with lesson id
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    viewAllComs,
    viewLessonComs,
    postComment,
    editCom,
    deleteCom
};