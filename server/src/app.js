const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Versioning
const api = require('./routes/api');

// Set up Express app
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

// Morgan for logging
app.use(morgan('combined'));

// Parse any incoming data
app.use(express.json());

// Serve our React app after we created an optimized build
app.use(express.static(path.join(__dirname, '..', 'public')));

// use the api version
app.use('/v1', api);
// app.use('/v2', v2api);

// Go to specific routers
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});


module.exports = app;