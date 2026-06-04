const express = require('express')
const blog = require('./routes/route');
const app = express()
const port = 3000

app.use(express.static("public"))   // when we use this than using middleware!
app.use('/route', blog);

app.get('/', (req, res) => {
  console.log("Hey it's a Get Request!");
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log("Hey it's a Post Request!");
  res.send('Hello World Post!')
}).put('/', (req, res) => {
  console.log("Hey it's a Put Request!");
  res.send('Hello World Put!')
}).delete('/', (req, res) => {
  console.log("Hey it's a Delete Request!");
  res.send('Deleted!')
})

app.get('/index', (req, res) => {
  res.sendFile('templates/index.html', {root: __dirname})  // sendFile use for send full page through API
})

app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4, name: ["kissu", "ravi"]})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})