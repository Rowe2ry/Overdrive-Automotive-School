const router = require('express').Router();
const comLogic = require('../controllerLogic/commentLogic');

router.get('/', comLogic.viewAllComs); // view all comments in DB
router.get('/:id', comLogic.viewLessonComs); // render ALL comments for ONE lesson (by LESSON ID)
router.post('/:id', comLogic.postComment) // add a comment to a lesson (target by LESSON id)
router.put('/:id', comLogic.editCom); // edit one comment by its id
router.delete('/:id', comLogic.deleteCom); // delete one comment by its id

module.exports = router;