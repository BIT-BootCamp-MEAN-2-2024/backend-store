const { Schema, model } = require( 'mongoose');


const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: 'Uncategorized'
        },
        description: String
    },
    {   
        timestamps: true
    }
);

const CategoryModel = model( 'categories', CategorySchema );


module.exports = CategoryModel;