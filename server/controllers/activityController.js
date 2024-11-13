const Activities = require("../models/activityModel");

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
    // Only get destination from trip
}

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
    // Extracts specific fields from the request body of our activity model schema
    
    
    // Check for missing required fields and return an error if any required field is absent

    // Creates a tripId associated with this activity
    const tripId = mongoose.Types.ObjectId.createFromHexString(trip);

    // Create a new activity entry in the database and return it as a JSON response
}

module.exports = { getActivity, postActivity };
