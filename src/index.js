const express = require('express')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

app.get('/', (_, res) => {
  res.render("index")
})
app.get('/about', (_, res) => {
  res.render('about')
})
app.get('/contact', (_, res) => {
  res.render('contact')
})
app.post('/submit', (req, res) => {
  const { name } = req.body
  res.render('welcome', { name })
})

app.listen(3000, () => console.log(`>> Server on port ${3000}<<`))