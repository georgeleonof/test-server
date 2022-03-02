const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
    {
        title: 'House1',
        rooms: 2
    },
    {
        title: 'House2',
        rooms: 4
    }
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

app.get('/bighouse', (req, res) => {
    let data = [];
    ads.forEach((house) => {
        if (house.rooms >= 2) {
            data.push(house);
        }
    });
    res.send(data);
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 3001');
});