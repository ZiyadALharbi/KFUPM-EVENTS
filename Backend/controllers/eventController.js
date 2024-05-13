const Event = require('../models/Event');

// Controller function for creating a new event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location, organizer } = req.body;
        const newEvent = new Event({
            title,
            description,
            date,
            location,
            organizer
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function for retrieving all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error('Error retrieving events:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function for retrieving a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        console.error('Error retrieving event by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function for updating an event by ID
exports.updateEventById = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json(updatedEvent);
    } catch (error) {
        console.error('Error updating event by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function for deleting an event by ID
exports.deleteEventById = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
