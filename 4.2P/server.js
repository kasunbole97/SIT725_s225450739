const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Recipe = require("./models/recipeModel");

const app = express();

const PORT = process.env.PORT || 3000;

const DATABASE_URL =
    process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/tastetrailDB";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/recipes", async (req, res) => {
    try {
        const recipes = await Recipe.find({})
            .sort({ name: 1 })
            .lean();

        res.status(200).json({
            status: "success",
            count: recipes.length,
            data: recipes
        });
    } catch (error) {
        console.error(
            "Unable to retrieve recipes:",
            error.message
        );

        res.status(500).json({
            status: "error",
            message:
                "The recipe data could not be retrieved."
        });
    }
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "TasteTrail API is running."
    });
});

const startServer = async () => {
    try {
        await mongoose.connect(DATABASE_URL);

        console.log(
            "Connected to MongoDB database: tastetrailDB"
        );

        app.listen(PORT, () => {
            console.log(
                `TasteTrail is running at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "MongoDB connection failed:",
            error.message
        );

        process.exit(1);
    }
};

startServer();