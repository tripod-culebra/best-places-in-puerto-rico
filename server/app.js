const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Places } = require('./api/places');

const CLIENT_PATH = path.resolve(__dirname, '../build');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(CLIENT_PATH));
app.use(cors());
app.use('/api/places', Places);
// app.get('/api/places', (req, res) => {
//     res.send('hello worls');
// });

// app.post('/api/places', (req, res) => {
//     res.send('hiiiii');
// });

module.exports = {
    app,
};
