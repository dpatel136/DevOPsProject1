const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {

    res.render("index", {
        author: "Dinesh Patel",
        deployTime: process.env.DEPLOY_TIME || new Date().toLocaleString()
    });

});

app.listen(3000, () => {
    console.log("Server Started");
});
