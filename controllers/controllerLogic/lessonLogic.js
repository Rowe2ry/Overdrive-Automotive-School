const { User, Lesson } = require('../../models');

const getAllLessons = async (req,res) => {
    try {
        const rawLessonData = Lesson.findAll();
        const lessonData = (await rawLessonData).map(lesson => {
            return lesson.get({ plain:true });
        });
        res.status(200).json(lessonData);
    } catch (err) {
        res.status(400).json(err);
    };
};

const viewOneLesson = async (req,res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    };
};

const addNewLesson = async (req,res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    };
};

const editLesson = async (req,res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    };
};

const deleteLesson = async (req,res) => {
    try {

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