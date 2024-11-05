import styles from "../styles/TripForm.module.css";

const AddTrip = () => {
  return (
    <div className={styles.container}>
      <h2>Add a Trip</h2>
      <form className={styles.tripForm}>
        <label htmlFor="destination">Destination:</label>
        <input type="text" name="destination" required />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" name="startDate" required />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" name="endDate" required />

        <label htmlFor="entry">Journal Entry:</label>
        <textarea name="entry" required></textarea>

        <button type="submit">Add Trip</button>
      </form>
    </div>
  )
};

export default AddTrip;
