const Trips = require('../models/tripModel');

// Create a GET async function to get all trips using the trip model schema
const getTrip = async (req, res) => {
    const allTrips = await Trips.find();
    return res.status(200).json({allTrips});
}

// Create a POST async function to add a trip using the trip model schema
const postTrip = async (req, res) => {
    // Extracts specific fields from the request body of our trip model schema
    const {destination, startDate, endDate, journalEntry} = req.body;
    
    // Check for missing required fields and return an error if any required field is absent
    if (!destination || !startDate || !endDate || !journalEntry) {
        return res.status(400).json({message: 'Please enter all components.'});
    }

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && start > end) {
        return res.status(400).json({ error: 'End date must be after start date' });
    }
    else {
        // Create a new trip entry in the database and return it as a JSON response
        const newTrip = await Trips.create(req.body);
        return res.status(200).json(newTrip);
    }
}

module.exports = { getTrip, postTrip };