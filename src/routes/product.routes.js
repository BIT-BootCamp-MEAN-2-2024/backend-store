const express = require( 'express' );
const router = express.Router();

const { getProducts, createProduct, updateProductPut, updateProductPatch, deleteProduct, getProductById } = require('../controllers/product.controller');
const { authUser, greeting } = require('../middlewares/auth-user.middleware');

/** Definir las rutas para la entidad producto
 * http://localhost:3000/api/products/
*/

router.post( '/', authUser, createProduct  );           // Crear un producto

router.get( '/', getProducts );                         // Obtiene todos los productos
router.get( '/:id', getProductById );                   // Obtiene un producto por su ID                            

// router.put( '/', authUser, updateProductPut );        // Actualiza todos los campos de un producto
router.patch( '/:id', authUser, updateProductPatch );    // Actualiza parcialmente los campos de un producto
router.delete( '/:id', authUser, deleteProduct );        // Elimina un producto


module.exports = router;