import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/TripForm.module.css";
import { formatRevalidate } from "next/dist/server/lib/revalidate";

const AddActivity = () => {
  /*  Activity 1: Add the useState hooks for 
    trips, 
    selectedTrip, 
    activity, 
    rating,
    review,
  */

  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState("");
  const [activity, setActivity] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  router = useRouter();

  //Uses the Axios API calls to fetch trip information
  const fetchTrips = async () => {
    const response = await TravelApi.getTrip();
    setTrips(response.data);
  };

  //Create a function that takes information from the form and uses the API
  const handleSubmit = async (e) => {
    //Prevent the form reloading
    e.preventDefault();

    //Use the same schema in /server/models
    await TravelApi.postActivity({
      trip: selectedTrip,
      activitySpot: activity,
      rating,
      review,
    });

    router.push("/");
  };

  //we want useEffect when it first renders, but we do not want it to change based on the state
  //This is because you just want to render the trips, not change them

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>
        What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?
      </p>
      <form className={styles.tripForm} onSubmit={handleSubmit}>
        <label htmlFor="trip">Choose your trip:</label>
        <select
          name="tripPicker"
          className="tripPicker"
          onChange={(e) => setSelectedTrip(e.target.value)}
        >
          {trips.map((trip) => (
            <option key={trip._id} value={trip._id}>
              {trip.destination} ({formatRevalidate(trip.startDate)} -{" "}
              {formatRevalidate(trip.endDate)})
            </option>
          ))}
        </select>
        <label htmlFor="activity" onChange={(e) => setActivity(e.target.value)}>
          Activity:
        </label>
        <input type="text" className="activity" name="activity" required />
        <label htmlFor="rating">Rating (1-5):</label>
        <select
          name="rating"
          className="rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="review">Review:</label>
        <textarea
          className="review"
          name="review"
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default AddActivity;
