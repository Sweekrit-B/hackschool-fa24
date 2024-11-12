const getActivity = async (req, res) => {
    const activity = [
        {
            destination: 'Paris',
            activitySpot: 'Louvre Museum',
            rating: '4',
            review: 'Visiting the Louvre was an unforgettable experience!'
        }
    ];

    res.status(200).json(activity);
}

const postActivity = async (req, res) => {
    /*
    This controller should retrieve the activity object from the request body (req.body.activity).
    Check for the following properties: destination, activitySpot,rating.
    See if destination, activitySpot, and rating exist.
    If not, send an error response back to the client.
    Otherwise, send a success response back to the client.
    Return a JSON object containing the activity data.
    */
    const activity = req.body.activity;

    if (!activity) {
        return res.status(400).json({ message: "Activity data is missing from request body." });
    }

    if (!activity.destination || !activity.activitySpot || !activity.rating) {
        return res.status(400).json({message: `Enter in all the activity parameters.`});
    }
    return res.status(200).json(activity);

}

module.exports = { getActivity, postActivity };