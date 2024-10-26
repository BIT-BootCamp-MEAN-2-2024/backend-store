const { registerCategory, removeOneCategoryById, updateOneCategoryById } = require("../services/category.service");

const { getAllCategories, getOneCategoryById } = require("../services/category.service")


const getCategories = async ( req, res ) => {
    
    try {
        const data = await getAllCategories();

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al obtener la lista de categorias' })
    }

}

const getCategoryById = async ( req, res ) => {
    
    const category_id = req.params.id;

    try {
        const data = await getOneCategoryById( category_id );

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al obtener categoria por ID' })
    }

}

const createCategory = async ( req, res ) => {
    const inputData = req.body;
    
    try {
        const data = await registerCategory( inputData );

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al crear categoria' })
    }
}

const removeCategory = async ( req, res ) => {
    const category_id = req.params.id;

    try {
        const data = await removeOneCategoryById( category_id );

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al eliminar categoria' });
    }
}

const updateCategory = async ( req, res ) => {
    const category_id = req.params.id;
    const inputData = req.body;

    try {
        const data = await updateOneCategoryById( category_id, inputData );

        res.json({ ok: true, data });

    } catch ( error ) {
        console.error( error );
        res.json({ ok: false, msg: 'Error al actualizar categoria' })
    }
}


module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    removeCategory,
    updateCategory
}