const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const activitySchema = new mongoose.Schema({
    trip: [{type: mongoose.Schema.Types.ObjectId, ref: 'trip'}],
    activity: String,
    rating: String,
    review: String
});

// Create a model for our activity based on the schema
const activity = mongoose.model('activity', activitySchema)

// Export model schema
module.exports = activity;