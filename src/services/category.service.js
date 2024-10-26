const CategoryModel = require( '../models/Category.model' );


async function registerCategory( newCategory ) {
    return await CategoryModel.create( newCategory );
}

async function getAllCategories () {
    return await CategoryModel.find();
}

async function getOneCategoryById ( id ) {
    return await CategoryModel.find({ _id: id });
}

async function removeOneCategoryById( id ) {
    return await CategoryModel.findOneAndDelete({ _id: id });
}

async function updateOneCategoryById( id, updatedCategory ) {
    return await CategoryModel.findOneAndUpdate(
        { _id: id }, 
        updatedCategory,
        { new: true }
    );
}


module.exports = {
    registerCategory,
    getAllCategories,
    getOneCategoryById,
    removeOneCategoryById,
    updateOneCategoryById
}