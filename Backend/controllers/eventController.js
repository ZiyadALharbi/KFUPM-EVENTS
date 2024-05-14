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

// Controller function for updating an event by ID
exports.updateEventById = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const { name, email } = req.body;

        // Find the event by ID
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Add participant to the event
        event.participants.push({ name, email });

        // Save the updated event
        const updatedEvent = await event.save();

        res.json(updatedEvent);
    } catch (error) {
        console.error('Error updating event by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function for uploading event photo
exports.uploadEventPhoto = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const photoPath = req.file.path; // Path of the uploaded photo

        // Find the event by ID and update the photo field
        const event = await Event.findByIdAndUpdate(eventId, { photo: photoPath }, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(event);
    } catch (error) {
        console.error('Error uploading event photo:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Controller function to fetch an event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        console.error('Error fetching event:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller function to render an event page
exports.renderEventPage = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('organizer'); // Populate organizer details

        if (!event) {
            return res.status(404).render('error.njk', { message: 'Event not found' });
        }
        res.status(200).render('event.njk', { event });
    } catch (err) {
        console.error('Error rendering event page:', err);
        res.status(500).render('error.njk', { message: 'Server error' });
    }
};

