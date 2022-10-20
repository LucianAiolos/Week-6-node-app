const express = require('express')
const server = express()

let PORT = 3000

server.get("/", (req, res) => {
  res.send("Home")
})

server.listen(PORT, ()=> {
  console.log('Listening on ', PORT)
})

