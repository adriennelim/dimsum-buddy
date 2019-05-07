const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Dimsum = require('../database/Dimsum.js');

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '/../client/dist')));

app.get('/dimsums', (req, res) => {
  Dimsum.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
