const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes'); // Import event routes
const db = require('./utils/db');
const photoRoutes = require('./routes/photoRoutes');
const nunjucks = require('nunjucks');
// Middleware
app.use(express.json()); // Parse JSON request bodies

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


app.get('/event', (req, res) => {
    res.render('event', { title: 'Event Page', eventTitle: 'ICS 202 Help Session' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
