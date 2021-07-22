import styles from "./TweetsBody.module.scss";
const TweetsBody = () => {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Tweets</div>
      </div>
    </div>
  );
};

export default TweetsBody;
