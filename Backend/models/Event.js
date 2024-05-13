// Import Mongoose
const mongoose = require('mongoose');

// Define participant schema
const participantSchema = new mongoose.Schema({
    name: String,
    email: String,
    // Add any other participant fields as needed
});


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
    },
    participants: [participantSchema], // Array of embedded participant documents
    photo: String // Field to store the path or URL of the event photo
});

// Create Event Model
const Event = mongoose.model('Event', eventSchema);

// Export Event Model
module.exports = Event;
