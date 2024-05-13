const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer for file uploads
const eventController = require('../controllers/eventController');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        // Generate a unique filename for the uploaded file
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize multer upload middleware
const upload = multer({ storage: storage });

// Route for uploading event photo
router.post('/events/:eventId/photo', upload.single('photo'), eventController.uploadEventPhoto);

module.exports = router;
