const { Router } = require( 'express' );
const { getCategories, getCategoryById, createCategory, removeCategory, updateCategory } = require('../controllers/category.controller');
const { authUser } = require( '../middlewares/auth-user.middleware' );

const router = Router();

// http://localhost:4000/api/categories
router.get( '/', getCategories);
router.get( '/:id', getCategoryById );
router.post( '/', authUser, createCategory );
router.delete( '/:id', authUser, removeCategory );
router.patch( '/:id', authUser, updateCategory );


module.exports = router;
