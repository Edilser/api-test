const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

var routesShows = require('./routes/shows');
var routesMovies = require('./routes/movies');
var routesSongs = require('./routes/songs');

const PORT = process.env.PORT || 3002;
app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(routesShows);
app.use(routesMovies);
app.use(routesSongs);


app.listen(PORT, () => {
    console.log(`servidor iniciado`);
})