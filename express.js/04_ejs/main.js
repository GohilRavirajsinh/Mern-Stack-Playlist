const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
    let agentName = "Agent47"
    let agentMission = "Kill Silently"
    let agentTaskSubmit = "Continue..."
    //  res.sendFile('templates/index.html', { root: __dirname }); // First
    //  res.sendFile(path.join(__dirname, 'index'));               // Second
     res.render('index', {agentName, agentMission, agentTaskSubmit});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})