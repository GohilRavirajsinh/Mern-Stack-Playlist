const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get / app.post / app.put / app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/contact', (req, res) => {
  res.send('Contact Page')
})

app.get('/blog', (req, res) => {
  res.send('Blog Page')
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//   res.send('Hello javascript')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//   res.send('Hello Python!')
// })

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})