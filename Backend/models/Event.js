// Import Mongoose
const mongoose = require('mongoose');

// Define Event Schema
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    location: String,
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model for the organizer
    }
});

// Create Event Model
const Event = mongoose.model('Event', eventSchema);

// Export Event Model
module.exports = Event;
