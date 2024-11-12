const getTrip = async (req, res) => {
    // We don't have a database yet, so we'll hard-code a trip to return.
    const trip = [
        {
            destination: 'Paris',
            startDate: '2024-08-01',
            endDate: '',
            journalEntry: 'Had a wonderful time visiting the Eiffel Tower and the Louvre.'
        }
    ];

    res.status(200).json(trip);
}

const getTripName = async (req, res) => {
   
    /*
    Create a GET route that accepts a trip’s name as a query parameter and responds with a unique message.
    Check for the name query parameter.
    Respond with a JSON object that says "We are going to [name]."
   */
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({message: 'Name query parameter is required'})
    }
    res.status(200).json(`We are going to ${name}.`);

}

module.exports = { getTrip, getTripName };
