const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const recipes = [
    {
        id: 1,
        title: "Creamy Tomato Pasta",
        image: "images/pasta.svg",
        category: "Italian",
        cookingTime: "25 minutes",
        description:
            "A simple pasta dish prepared with tomato sauce, herbs and a creamy finish."
    },
    {
        id: 2,
        title: "Vegetable Curry",
        image: "images/curry.svg",
        category: "Sri Lankan",
        cookingTime: "35 minutes",
        description:
            "A colourful vegetable curry prepared with coconut milk and aromatic spices."
    },
    {
        id: 3,
        title: "Berry Pancakes",
        image: "images/pancakes.svg",
        category: "Breakfast",
        cookingTime: "20 minutes",
        description:
            "Soft pancakes served with mixed berries and a small amount of maple syrup."
    }
];

app.get("/api/recipes", (req, res) => {
    res.json({
        status: "success",
        data: recipes
    });
});

app.listen(PORT, () => {
    console.log(`TasteTrail is running at http://localhost:${PORT}`);
});