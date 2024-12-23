const Activities = require("../models/activityModel");
const mongoose = require('mongoose');

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
    // Only get destination from trip
    const allActivities = await Activities.find().populate('trip', 'destination');
    return res.status(200).json({allActivities});
}

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
    // Extracts specific fields from the request body of our activity model schema
    const {trip, activity, rating, review} = req.body;
    
    // Check for missing required fields and return an error if any required field is absent
    if (!trip || !activity || !rating || !review) {
        return res.status(400).json({message: 'Please enter all components.'})
    }

    // Creates a tripId associated with this activity
    const tripId = mongoose.Types.ObjectId.createFromHexString(trip);

    // Create a new activity entry in the database and return it as a JSON response
    const newActivity = await Activities.create({
        trip: tripId,
        activity,
        rating,
        review});
    return res.status(200).json(newActivity)
}

module.exports = { getActivity, postActivity };
