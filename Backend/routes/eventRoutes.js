// Import Express and the Event Controller
const express = require('express');
const eventController = require('../controllers/eventController');

// Create a new Express router
const router = express.Router();

// Route for creating a new event
router.post('/events', eventController.createEvent);

// Route for retrieving all events
router.get('/events', eventController.getAllEvents);

// Route for retrieving a single event by ID
router.get('/events/:eventId', eventController.getEventById);

// Route for updating an event by ID
router.put('/events/:eventId', eventController.updateEventById);

// Route for deleting an event by ID
router.delete('/events/:eventId', eventController.deleteEventById);

//new ones

// Route to create a new event
router.post('/', eventController.createEvent);

// Route to fetch an event by ID
router.get('/:id', eventController.getEventById);

// Route to render an event page by ID
router.get('/page/:id', eventController.renderEventPage);

module.exports = router;


// Export the router
module.exports = router;
