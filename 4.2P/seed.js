const mongoose = require("mongoose");
const Recipe = require("./models/recipeModel");

const DATABASE_URL =
    "mongodb://127.0.0.1:27017/tastetrailDB";

const sampleRecipes = [
    {
        name: "Creamy Tomato Pasta",
        imagePath: "images/pasta.svg",
        cuisine: "Italian",
        preparationMinutes: 25,
        difficulty: "Easy",
        vegetarian: true,
        description:
            "A quick pasta dish prepared with tomato sauce, herbs and a creamy finish."
    },

    {
        name: "Sri Lankan Vegetable Curry",
        imagePath: "images/curry.svg",
        cuisine: "Sri Lankan",
        preparationMinutes: 35,
        difficulty: "Medium",
        vegetarian: true,
        description:
            "A colourful vegetable curry prepared with coconut milk and aromatic spices."
    },

    {
        name: "Berry Pancakes",
        imagePath: "images/pancakes.svg",
        cuisine: "International",
        preparationMinutes: 20,
        difficulty: "Easy",
        vegetarian: true,
        description:
            "Soft pancakes served with mixed berries and a small amount of maple syrup."
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);

        console.log("Connected to MongoDB for seeding.");

        await Recipe.deleteMany({});

        const insertedRecipes =
            await Recipe.insertMany(sampleRecipes);

        console.log(
            `${insertedRecipes.length} recipes inserted successfully.`
        );
    } catch (error) {
        console.error(
            "Unable to seed the database:",
            error.message
        );

        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();

        console.log("Database connection closed.");
    }
};

seedDatabase();