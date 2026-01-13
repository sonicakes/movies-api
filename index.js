const express = require('express');
const app = express();
const data = require('./data.json');
const PORT = 3000;

const cors = require('cors'); 

app.use(cors());

app.get('/api/movies', (req, res) => {
  res.json(data);
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});