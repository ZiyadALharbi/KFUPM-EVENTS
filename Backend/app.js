const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes'); // Import event routes
const db = require('./utils/db');

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes); // Mount event routes on /api/events path

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
