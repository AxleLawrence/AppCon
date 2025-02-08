const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));

// Set static folder
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/", (req, res) => {
    res.render("Home");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
