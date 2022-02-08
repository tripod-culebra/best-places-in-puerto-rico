// const path = require('path');
// const dotenv = require('dotenv');
require('dotenv').config();

// dotenv.config({
//     path: path.resolve(__dirname, '../.env'),
// });
const { app } = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => console.info(`Server listening on : ${PORT}`));
