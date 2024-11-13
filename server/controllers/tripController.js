const Trips = require('../models/tripModel');

// Create a GET async function to get all trips using the trip model schema
const getTrip = async (req, res) => {
    // Code here
}

// Create a POST async function to add a trip using the trip model schema
const postTrip = async (req, res) => {
    // Extracts specific fields from the request body of our trip model schema
    
    
    // Check for missing required fields and return an error if any required field is absent


    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    }
    else {
        // Create a new trip entry in the database and return it as a JSON response
    }
}

module.exports = { getTrip, postTrip };