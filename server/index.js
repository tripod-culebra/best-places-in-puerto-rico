const fs = require('fs');
const https = require('https');

require('dotenv').config();

const { app } = require('./app');

const { PORT } = process.env;

const options = {
    key: fs.readFileSync('./.cert/key.pem'),
    cert: fs.readFileSync('./.cert/cert.pem'),
};

https
    .createServer(options, app)
    .listen(PORT, () => console.info(`Express server listening on port: ${PORT}`));
