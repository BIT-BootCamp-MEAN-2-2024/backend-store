const express = require( 'express' );
const cors = require( 'cors' );

const app = express();
const PORT = process.env.PORT;

const dbConection = require( './config/mongo.config' );

/** Establecer la conexion a MongoDB usando la configuracion */
dbConection();

/** MIDDLEWARE: */
app.use( cors() );                      // Middleware: Permite compartir recursos de la API con terceros
app.use( express.json() );              // Middleware: Permite manejar JSON en las solicitudes

/** EndPoints de nuestro servidor */
app.use( '/api/products', require( './routes/product.routes' ) );   // Middleware: Activa solicitudes que comienzan con el prefijo /api/products
app.use( '/api/auth', require( './routes/auth.routes' ) );          // Middleware: Activa solicitudes que comienzan con el prefijo /api/auth

/** Lanzamos el servidor en puerto indicado 
 * http://localhost:3000
*/
app.listen( PORT, function() {
    console.log( 'Servidor corriendo en puerto 3000' );
});