import styles from "./TweetsCard.module.scss";

const TweetCard = ({ imageSrc, handle, date, content }) => {
  return (
    <article className={styles.tweetContainer}>
      <div className={styles.tweetInfo}>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt="user pfp" />
        </div>
        <div className={styles.handleDate}>
          <p className="handle">{handle}</p>
          <hr />
          <p className="date">{new Date(date).toTimeString()}</p>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.redirect}>
        <a
          href="https://twitter.com/dev__aisha"
          target="_blank"
          rel="noreferrer"
          className={styles.tweetHover}
        >
          Go to Tweet
        </a>
      </div>
    </article>
  );
};

export default TweetCard;
