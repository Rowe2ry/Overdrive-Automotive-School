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
        const thisRawQuiz = await Quiz.findByPk(req.params.id,
            {
                include: [{ model: Lesson, attributes: ['Title'] }]
            });
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

const gradeQuiz = async (req,res) => {
    // clicking the answer button on the page will do this post request using the quiz id in the /api/quizzes/submit/req.params.id and then the body of the submit will be an array of 5 integers (i) where 0 < i < 5 (1 thru 4) and they will be checked against this quiz's correct answers. If 4 out of 5 of the questions are correct, the user access level will be updated to include the access code on their access string property.
    try {
        const userAnswers = [
            req.body.q1a,
            req.body.q2a,
            req.body.q3a,
            req.body.q4a,
            req.body.q5a,
        ];
        const thisRawQuiz = await Quiz.findByPk(req.params.id);
        const thisQuiz = await thisRawQuiz.get({ plain:true });
        const correctAnswers = [
            thisQuiz.q1correct_a,
            thisQuiz.q2correct_a,
            thisQuiz.q3correct_a,
            thisQuiz.q4correct_a,
            thisQuiz.q5correct_a,
        ];
        let numCorrect = 0; // baseline at zero
        for(let i =0; i < 5; i++) { // compare uswers answers to correct, iterate thru both arrays
            numCorrect += userAnswers[i] == correctAnswers[i] ? 1 : 0; // double equals sign here just because its okay if one is a string and one is a number, if they're the same value, we're good
        };
        if (numCorrect < 4) {
            res.status(500).json({ message: 'Sorry you did not pass this quiz. Please reread the lesson and try again.'});
        } else {
            const theRawUser = await User.findOne({ where: { id:req.session.user_id } });
            const thisUser = theRawUser.get({ plain:true });
            let currentAccess = thisUser.access_level;
            currentAccess = currentAccess.concat(thisQuiz.reward_code);
            User.update(
                {
                    access_level: currentAccess  
                },
                {
                    where: { id: req.session.user_id }
                }
            )
        };
        res.redirect('../../category/categories');

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