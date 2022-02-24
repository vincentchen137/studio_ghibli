const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const movie = require('./movie');
app.use('/movie', movie);

const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`Server started at http://localhost:${port}`);
});
