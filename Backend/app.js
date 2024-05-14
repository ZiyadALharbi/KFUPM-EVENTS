const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes'); // Import event routes
const db = require('./utils/db');
const photoRoutes = require('./routes/photoRoutes');
const nunjucks = require('nunjucks');
const path = require('path');
const eventController = require("./controllers/eventController");
const cors = require('cors');
// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/public')));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes); // Mount event routes on /api/events path
app.use('/api/events', photoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Set up Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Set the view engine to use Nunjucks
app.set('view engine', 'njk');




// Define a route
app.get('/', (req, res) => {
    res.render('home.njk');
});


app.get('/page/:id', eventController.renderEventPage);

// Define a route
app.get('/login', (req, res) => {
    res.render('login.njk');
});

// Start the server
const PORT = process.env.PORT || 3000;
//on deploy use 0,0,0,0
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
