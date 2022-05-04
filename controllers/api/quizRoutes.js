const router = require('express').Router();
const quizLogic = require('../controllerLogic/quizLogic');

router.get('/', quizLogic.getAllQuizzes); // for ADMIN using Insomnia
router.get('/:id', quizLogic.renderQuizPage); // show a page with a quiz
router.put('/:id', quizLogic.editQuiz); // ADMIN in Insomnia
router.put('/submit/:id', quizLogic.gradeQuiz); // check answers & update user access if pass
router.delete('/:id', quizLogic.deleteQuiz); // remove quiz from DB (ADMIN Insomnia)

module.exports = router;