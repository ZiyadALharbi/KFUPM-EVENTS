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
// Middleware
app.use(express.json()); // Parse JSON request bodies

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




app.get('/event', (req, res) => {
    res.render('event', { title: 'Event Page', eventTitle: 'ICS 202 Help Session' });
});


app.get('/page/:id', eventController.renderEventPage);

// api 
const MONGODB_URI = 'mongodb+srv://Saud:1234@cluster0.hr9omjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define schema
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
    name: String,
    age: Number
});

// Define model
const ExampleModel = mongoose.model('Example', exampleSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Example API routes
app.get('/examples', async (req, res) => {
    try {
        const examples = await ExampleModel.find();
        res.json(examples);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/examples', async (req, res) => {
    const example = new ExampleModel({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const newExample = await example.save();
        res.status(201).json(newExample);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
//on deploy use 0,0,0,0
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
