const express = require('express')
const blog = require('./routes/blog');
const app = express()
const port = 3000

// app.use(express.static("public"))
app.use('/blog', blog);

// Middleware 1
app.use((req, res, next) => { 
    console.log(req.headers);
    req.Goku = "Goku Gaming!"  // add header by ouor self
  console.log('Middleware 1');
  next();
});

// Middleware 2
app.use((req, res, next) => { 
  console.log(`Middleware 2 ${req.Goku}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send(`This is About ${req.Goku}`)
})

app.get('/contact', (req, res) => {
  res.send('Hello This is Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})