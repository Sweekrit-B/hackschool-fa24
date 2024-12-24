const mongoose = require("mongoose");

// Creating a schema–a "blueprint" for our data
const activitySchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trips" },
  activitySpot: { type: String },
  rating: { type: String },
  review: { type: String },
});

// Create a model for our trips based on the schema
const Activities = mongoose.model("Activities", activitySchema);

module.exports = Activities;
