const router = require('express').Router();
const lessonLogic = require('../controllerLogic/lessonLogic');

router.get('/', lessonLogic.getAllLessons); // get all lessons
router.get('/:id', lessonLogic.viewOneLesson); // view one lesson by id
router.post('lesson', lessonLogic.addNewLesson); // add new lesson
router.put('/:id', lessonLogic.editLesson); // edit lesson by id
router.delete('/:id', lessonLogic.deleteLesson); // delete lesson by id