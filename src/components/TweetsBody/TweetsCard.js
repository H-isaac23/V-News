import styles from "./TweetsCard.module.scss";

const TweetCard = () => {
  return (
    <div className={styles.tweet}>
      <div className={styles.tweetContainer}>
        <div className={styles.tweetInfo}></div>
      </div>
    </div>
  );
};
