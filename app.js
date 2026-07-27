const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {
        author: "Dinesh PAtel",
        deployTime: process.env.DEPLOY_TIME || new Date().toLocaleString()
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});
