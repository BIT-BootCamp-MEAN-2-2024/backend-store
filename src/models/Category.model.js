const { Schema, model } = require( 'mongoose');


const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            default: 'Uncategorized'
        },
        description: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    {   
        timestamps: true
    }
);

const CategoryModel = model( 'categories', CategorySchema );


module.exports = CategoryModel;