const express = require('express')
const app = express()

const PORT = 8080

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {title: 'Welcome To My Server', names: ["Lucian", "Anna", "Mia", "Max"]})
})

app.get('/', (req, res) => {
  res.render('about', {title: 'This is my about page!', about: "lorem ipsum muahahahah!"})
})


app.listen(PORT, ()=> {
  console.log('Hello from ', PORT)
})