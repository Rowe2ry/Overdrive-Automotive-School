const router = require('express').Router();
const apiRoutes = require('./api')
const homeLogic = require('./controllerLogic/homeLogic');

router.get('/', homeLogic.renderHomePage);

router.use('/api', apiRoutes);

module.exports = router;

/* =========================================================================
 * OVERVIEW GUIDE OF ROUTES * 
 * KEY:
 * =========================================================================
 * ❌  not created or tested
 * 🔅  code written but not yet tested
 * 🔆  route tested via Insomnia, but rendering to handlebars not tested
 * ✅  code written and tested
 * (ADMIN Insomnia) - no page UI created for route, meant to admin DB management
 * || *.handlebars - request generates an associated handlebars layout
 * =========================================================================
 * 
 * =========================================================================
 * HOME / USER
 * =========================================================================
 * 
 * GET    |  / ---- view home page || home.handlebars
 * GET    |  /api/account ---- list all users (ADMIN Insomnia)
 * PUT    |  /api/account/:id ---- edit user (ADMIN Insomnia)
 * DELETE |  /api/account/:id ---- remove user (ADMIN Insomnia)
 * GET    |  /api/account/login ---- view login page || login.handlebars
 * GET    |  /api/account/register ---- view registration page || register.handlebars
 * POST   |  /api/account/register ---- send request to create new user
 * POST   |  /api/account/login ---- send login request to server
 * GET    |  /api/account/settings ---- view account settings page | acctSet.handlebars
 * PUT    |  /api/account/settings ---- change email address or password
 * POST   |  /api/account/logout ---- send logout request to destroy session
 * 
 * =========================================================================
 * CATEGORIES
 * =========================================================================
 * 
 * GET    |  /api/category/categories ---- get list of all categories & lessons || categories.handlebars
 * GET    |  /api/category/insom ---- get list of all categories & lessons (ADMIN Insomnia)
 * GET    |  /api/category/:id ---- view category and all associated lessons || oneCat.handlebars
 * POST   |  /api/category/ ---- add new category (ADMIN Insomnia)
 * PUT    |  /api/category/:id ---- edit category (ADMIN Insomnia)
 * DELETE |  /api/category/:id ---- delete category (ADMIN Insomnia)
 * 
 * =========================================================================
 * LESSONS
 * =========================================================================
 * 
 * GET    |  /api/lessons ---- get all lessons as JSON (for ADMIN diagnostics thru iInsomnia)
 * GET    |  /api/lessons/:id ---- render onePage with lesson by id || oneLesson.handlebars
 * POST   |  /api/lessons/lesson ---- add new lesson to the DB (ADMIN Insomnia)
 * PUT    |  /api/lessons/:id ---- update a lesson by id (ADMIN Insomnia)
 * DELETE |  /api/lessons/:id ---- delete lesson by id (ADMIN Insomnia)
 * 
 * =========================================================================
 * COMMENTS
 * =========================================================================
 * 
 * GET    |  /api/comments ---- view all comments in DB include lessons (ADMIN Insomnia)
 * GET    |  /api/comments/:id ---- view all comments on a particular lesson (by LESSON ID) || allComments.handlebars
 * POST   |  /api/comments/:id ---- post a comment to a lesson (by LESSON ID)
 * PUT    |  /api/comments/:id ---- edit a comment by id || editComment.handlebars
 * DELETE |  /api/comments/:id ---- delete a comment by id
 * 
 * =========================================================================
 * QUIZZES
 * =========================================================================
 * 
 * GET    |  /api/quizzes ---- view all quizzes (ADMIN Insomnia)
 * GET    |  /api/quizzes/:id ---- view one quiz ||  quiz.handlebars
 * PUT    |  /api/quizzes/:id ---- add new quiz || (ADMIN Insomnia)
 * PUT    |  /api/quizzes/submit/:id ---- check user answers against key, update user record to have new access code rewarded by quiz (targeted by quiz id)
 * DELETE |  /api/quizzes/:id ---- delete quiz (ADMIN Insomnia)
 * ========================================================================= */