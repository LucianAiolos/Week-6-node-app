const { application } = require('express');
const express = require('express');

const server = express();

const peopleRouter = express.Router()

// Require your json file
const people = require('./src/data/people.json')

server.set('views', './src/views');

server.set('view engine', 'ejs');

peopleRouter.route('/').get((req, res) => {
      res.render('people', {
        people
      })
    })

peopleRouter.route('/:id')
.get((req, res) => {
    let id = req.params.id
    // res.send("...from people at index 1")
    console.log(id)
    res.render('person', {person: people[`${people.id}`]})
})


server.use('/people', peopleRouter)

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