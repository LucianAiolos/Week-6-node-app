const express = require('express');

const server = express();

server.set('views', './src/views');

server.set('view engine', 'ejs');

server.get("/", (req, res) => {
    res.render('index', {title: "Welcome to the Home Page"})
})


// 1. add the about route here


let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})