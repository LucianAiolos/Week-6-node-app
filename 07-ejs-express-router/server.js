const { application } = require('express');
const express = require('express');

const server = express();

// 1. Add express Router
const peopleRouter = express.Router()


server.set('views', './src/views');

server.set('view engine', 'ejs');

// 2. Use middleware to connect your peopleRouter to your /people route
server.use('/people', peopleRouter)

// 3. Add peopleRouter and a get route here
// peopleRouter.get('/people', (req, res) =>{
//     res.render('people', {title: people})
// })
peopleRouter.route('/').get((req, res) => {
    res.render('people', 
        {title: 'Welcome to the people page',})
})

peopleRouter.route(`${'/1'}`).get((req, res) => {
    res.send("...from people at index 1")
})

// 4. Create a route for just one person from your person data
peopleRouter.get('/people/1', (req, res) => {
    res.send('... from people at index 1')
})

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