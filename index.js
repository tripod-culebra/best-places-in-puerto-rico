const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    // Load environment variables from .env file in non prod environments
    require('dotenv').config();
}
require('./utils/connectdb');

require('./strategies/JwtStrategy');
require('./strategies/LocalStrategy');
require('./authenticate');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(passport.initialize());

app.use('/users', userRouter);

app.use(express.static(path.join(__dirname, 'build')));

const server = app.listen(process.env.PORT || 8081, () => {
    const { port } = server.address();

    console.info('App started at port:', port);
});
