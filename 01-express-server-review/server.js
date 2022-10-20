const express = require('express');

const server = express();

server.get("/", (req, res) => {
    res.send("HOME")
})

let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on ", PORT)
})