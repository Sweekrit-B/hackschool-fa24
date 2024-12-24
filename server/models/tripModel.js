const mongoose = require("mongoose");

// Creating a schema–a "blueprint" for our data
const tripSchema = new mongoose.Schema({
  destination: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  journalEntry: { type: String },
});

// Create a model for our trips based on the schema
const Trips = mongoose.model("Trips", tripSchema);

module.exports = Trips;
