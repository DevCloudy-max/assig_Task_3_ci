const express = require("express");
const app = express();

app.use(express.json());

const items = [{ id: 1, name: "Item 1" }];

app.get("/api/items", (req, res) => {
    res.json(items);
});
app.post("/api/items", (req, res) => {
    const { name } = req.body; // Extract name from request body

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const newItem = { id: items.length + 1, name }; // Ensure 'name' is included
    items.push(newItem); 

    res.status(201).json(newItem); // Return full item object
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});

module.exports = app; // Export for testing
