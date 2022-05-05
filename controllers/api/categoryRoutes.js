const router = require('express').Router();
const catLogic = require('../controllerLogic/categoryLogic');

router.get('/categories', catLogic.renderCatList); // view all categories as list
router.get('/insom', catLogic.renderCatListInsom); // view all categories in Insomnia
router.get('/:id', catLogic.viewOneCat); // all lessons in one category
router.post('/', catLogic.addCat) // add new category
router.put('/:id', catLogic.updateCat) //update category
router.delete('/:id', catLogic.removeCat) // delete a category

module.exports = router;