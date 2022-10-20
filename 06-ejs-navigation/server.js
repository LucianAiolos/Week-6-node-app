const express = require('express');

const server = express();

server.set('views', './src/views');

server.set('view engine', 'ejs');

server.get("/", (req, res) => {

    res.render('index', {title: "Welcome to the Home Page", data: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lesbsack", "Chelsey Dietrich", "Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]})
})

server.get("/about", (req, res) => {
    res.render('about', {title: "Welcome to the About Page"})
})
let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})