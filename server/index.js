const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

const { app } = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on :${PORT}`);
});
