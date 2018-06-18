const express = require('express');
const app = express();
const Github = require('./Github');

let gitHub = new Github();

app.get('/', (req, res) => {
  res.send("Hello from the main page.")
})


const port = 5000;
app.listen(port, (req, res) => {
  console.log(`Server is now running on port ${port}`);
})