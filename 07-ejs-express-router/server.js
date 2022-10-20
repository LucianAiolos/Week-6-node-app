const { application } = require('express');
const express = require('express');

const server = express();

// 1. Add express Router


server.set('views', './src/views');

server.set('view engine', 'ejs');

// 3. Add peopleRouter and a get route here


// 4. Create a route for just one person from your person data

// 2. Use middleware to connect your peopleRouter to your /people route
server.use('/people', peopleRouter)

server.get("/", (req, res) => {
    // Add the data array inside of the object

    res.render('index', {title: "Welcome to the Home Page", data: ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lesbsack", "Chelsey Dietrich", "Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"]})
})

server.get("/about", (req, res) => {
    res.render('about', {title: "Welcome to the About Page"})
})
let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})