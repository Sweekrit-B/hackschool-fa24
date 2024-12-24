const mongoose = require("mongoose");
const Activities = require("../models/activityModel");

// Create a GET async function to get all activities using the activity model schema
const getActivity = async (req, res) => {
  const activity = await Activities.find().populate("trip", "destination");
  res.status(200).json(activity);
};

// Create a POST async function to add an activity using the activity model schema
const postActivity = async (req, res) => {
  const { trip, activitySpot, rating, review } = req.body;

  if (!trip || !activitySpot || !rating) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const tripId = mongoose.Types.ObjectId.createFromHexString(trip);

  const newActivity = await Activities.create({
    trip: tripId,
    activitySpot,
    rating,
    review,
  });
  res.status(200).json(newActivity);
};

module.exports = { getActivity, postActivity };
