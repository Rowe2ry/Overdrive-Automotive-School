const { get } = require('express/lib/response');
const { Quiz, User } = require('../../models');

const getAllQuizzes = async (req,res) => {
    try {
        const allQuizzes = await Quiz.findAll();
        res.status(200).json(allQuizzes);
    } catch (err) {
        res.status(400).json(err);
    };
};

const renderQuizPage = async (req,res) => {
    try {
        const thisRawQuiz = await Quiz.findByPk(req.params.id);
        const thisQuiz = await thisRawQuiz.get({ plain:true });
        res.render('quiz', { thisQuiz });
    } catch (err) {
        res.status(400).json(err);
    };
};

const editQuiz = (req,res) => {
    try {
        Quiz.update(
                {
                    id: req.body.id,
                    q1: req.body.q1,
                    q1a1: req.body.q1a1,
                    q1a2: req.body.q1a2,
                    q1a3: req.body.q1a3,
                    q1a4: req.body.q1a4,
                    q1correct_a: req.body.q1correct_a,
                    q2: req.body.q2,
                    q2a1: req.body.q2a1,
                    q2a2: req.body.q2a2,
                    q2a3: req.body.q2a3,
                    q2a4: req.body.q2a4,
                    q2correct_a: req.body.q2correct_a,
                    q3: req.body.q3,
                    q3a1: req.body.q3a1,
                    q3a2: req.body.q3a2,
                    q3a3: req.body.q3a3,
                    q3a4: req.body.q3a4,
                    q3correct_a: req.body.q3correct_a,
                    q4: req.body.q4,
                    q4a1: req.body.q4a1,
                    q4a2: req.body.q4a2,
                    q4a3: req.body.q4a3,
                    q4a4: req.body.q4a4,
                    q4correct_a: req.body.q4correct_a,
                    q5: req.body.q5,
                    q5a1: req.body.q5a1,
                    q5a2: req.body.q5a2,
                    q5a3: req.body.q5a3,
                    q5a4: req.body.q5a4,
                    q5correct_a: req.body.q5correct_a,
                    reward_code: req.body.reward_code,
                    lesson_id: req.body.lesson_id
                },
                {
                    where: { id: req.params.id }
                }
            );
            res.status(400).json('quiz updated');
    } catch (err) {
        res.status(400).json(err);
    };
};

const gradeQuiz = (req,res) => {
    try {
        
    } catch (err) {
        res.status(400).json(err);
    };
};

const deleteQuiz = (req,res) => {
    try {
        Quiz.destroy({ where: { id: req.params.id } });
        res.status(200).json('Quiz Deleted');
    } catch (err) {
        res.status(400).json(err);
    };
};

module.exports = {
    getAllQuizzes,
    renderQuizPage,
    editQuiz,
    gradeQuiz,
    deleteQuiz
};