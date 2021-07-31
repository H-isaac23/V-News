import styles from "./TweetsCard.module.scss";

const TweetCard = (props) => {
  return (
    <article className={styles.tweetContainer}>
      <div className={styles.tweetInfo}>
        <div className={styles.imageWrapper}>
          <img src={props.imageSrc} alt="user pfp" />
        </div>
        <div className={styles.handleDate}>
          <p className="handle">{props.handle}</p>
          <hr />
          <p className="date">{props.date}</p>
        </div>
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quia
        provident ipsa neque accusantium temporibus dolorem esse ratione,
        cupiditate deleniti! Possimus, cum reiciendis ab deleniti vitae
        voluptatem illum quia. Nisi, accusamus ratione! Cupiditate sapiente
        praesentium accusamus consequatur deserunt nihil exercitationem, maxime
        alias at dolores quidem, libero consequuntur commodi incidunt quo?
      </div>
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
