const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        imagePath: {
            type: String,
            required: true,
            trim: true
        },

        cuisine: {
            type: String,
            required: true,
            trim: true
        },

        preparationMinutes: {
            type: Number,
            required: true,
            min: 1
        },

        difficulty: {
            type: String,
            required: true,
            enum: ["Easy", "Medium", "Advanced"]
        },

        vegetarian: {
            type: Boolean,
            required: true
        },

        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 300
        }
    },
    {
        timestamps: true
    }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;