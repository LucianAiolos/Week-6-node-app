const express = require('express')
const { application } = require('express')
const app = express()

app.set('views', './src/views/')
app.set('view engine', 'ejs')

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Home')
  res.render('home', {index: 'welcome to the index'})
})

app.listen(PORT, console.log('Listening on ', PORT))