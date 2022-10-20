const express = require('express');

const server = express();

server.set('views', './src/views');
server.set('view engine', 'ejs');


server.get("/", (req, res) => {
    // Add the data array inside of the object
    res.render('index', {title: "Welcome to the Home Page"})
})

server.get("/about", (req, res) => {
    var names = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lesbsack", "Chelsey Dietrich", "Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque", ]
    res.render('about', {names: names})
})
let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})