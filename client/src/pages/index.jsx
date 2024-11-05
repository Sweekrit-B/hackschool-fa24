import styles from "@/styles/Home.module.css";

const Home = () => {
  return (
    /*First div is the main one that defines the primary styles
      Second div is the container that contains both boxes.
      Third div is each box.
      Each div has its own style, that is defined in the home module*/
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
