import styles from "./TweetsBody.module.scss";

export default function TweetsBody() {
  return (
    <div className={styles.main}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Tweets</div>
      </div>
    </div>
  );
}
