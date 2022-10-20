const express = require('express');
const server = express();

// server.use('views', './src/views')
// server.use('view engine', 'ejs')

//add the middleware that connects your templating engine to your express server
//1. set the folder for your views

//2. set ejs as your view engine

server.set('views', './src/views');
server.set('view engine', 'ejs');

server.get("/", (req, res) => {
    // 3. Use the render method here. 
    // The render method takes two parameters:
    // The first parameter is the name of the file.
    // The second parameter is a an object (key, value pair). 
    // We'll store our title here

    res.render('index', {title: "Welcome to the Home Page"})
})

let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})