import styles from "../styles/TripForm.module.css";

const AddActivity = () => {
  return (
    <div className={styles.container}>
      <h2>Add an Activity</h2>
      <p>What fun things did you do on your trip? Sky-diving? Hiking? Kayaking?</p>
      <form className={styles.tripForm}>
        <label htmlFor="tripPicker">Choose your trip:</label>
        <select name="tripPicker" required>
          <option value="">Please select a location.</option>
          <option value="Honolulu, Hawaii">Honolulu, Hawaii</option>
          <option value="London, UK">London, UK</option>
        </select>

        <label htmlFor="activity">Activity:</label>
        <input type="text" name="activity" required />

        <select name="ratingPicker" required>
          <option value="">Please select a rating.</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="review">Review:</label>
        <textarea name="review" required>Please enter your review.</textarea>

        <button type="submit">Add Activity</button>

      </form>
    </div>
  );
};

export default AddActivity;
