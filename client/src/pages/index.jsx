import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.tripContainer}>
        <div className={styles.tripBox}>
          <h3>Trips</h3>
        </div>
        <div className={styles.tripBox}>
          <h3>Activities</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
