const mongoose = require('mongoose');

// MongoDB connection string (replace <username>, <password>, and <dbname> with your actual credentials)
const uri = 'mongodb://kfupm-events.onrender.com:27017/eventy';

// Mongoose options to avoid deprecation warnings
// Updated options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Connect to MongoDB
mongoose.connect(uri, options)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
