const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Simple GET endpoint
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello from the SIT725 Express server"
    });
});

// Addition web service
app.get("/add", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return res.status(400).json({
            error: "Please provide two valid numbers."
        });
    }

    res.json({
        num1,
        num2,
        result: num1 + num2
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});