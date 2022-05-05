const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const lessonRoutes = require('./lessonRoutes');
const commentRoutes = require('./commentRoutes');
const quizRoutes = require('./quizRoutes');

router.use('/account', userRoutes);
router.use('/category', categoryRoutes);
router.use('/lessons', lessonRoutes);
router.use('/comments', commentRoutes);
router.use('/quizzes', quizRoutes);

module.exports = router;