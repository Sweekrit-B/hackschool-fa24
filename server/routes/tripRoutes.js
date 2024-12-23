const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController');
const activityController = require('../controllers/activityController');

// Add API routes here
router.get('/trip', tripController.getTrip);
router.post('/trip', tripController.postTrip)
//router.get('/name', tripController.getTripName);

// Add post route for trip

router.get('/activity', activityController.getActivity);
router.post('/activity', activityController.postActivity);


module.exports = router;