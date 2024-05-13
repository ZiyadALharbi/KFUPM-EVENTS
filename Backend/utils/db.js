const mongoose = require('mongoose');

// MongoDB connection string (replace <username>, <password>, and <dbname> with your actual credentials)
const uri = 'mongodb+srv://Saud:1234@cluster0.hr9omjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
