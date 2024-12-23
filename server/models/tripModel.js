const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const tripSchema = new mongoose.Schema({
    destination: String,
    startDate: {type: Date, default: Date.now},
    endDate: {type: Date, default: Date.now},
    journalEntry: String
});

// Create a model for our trips based on the schema
const trip = mongoose.model('trip', tripSchema)

// Export model schema
module.exports = trip;