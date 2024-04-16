const express = require('express');
const path = require('path'); // Include the path module
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // Serve static files from public directory


// Middleware to set no-cache for every response
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// Serve index.html at the root path
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your existing route for /cs212/homework/8
app.get('/cs212/homework/8', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Your POST route for /cs212/homework/8
app.post('/cs212/homework/8', (req, res) => {
    const { adjective, pluralNoun, personName, verb, noun } = req.body;
    const madLib = `Last night, I came across a ${adjective} assembly of ${pluralNoun} reminiscent of ${personName}. As a result, I opted to ${verb} in the vicinity of the ${noun}.`;

    res.send(madLib);
});

module.exports = app;
