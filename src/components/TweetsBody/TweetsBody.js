import styles from "./TweetsBody.module.scss";
import TweetCard from "./TweetsCard";
import { useEffect, useState } from "react";
import getTweets from "../../services/Bodies";

const TweetsBody = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then((response) => {
      setTweets(
        response.data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10)
      );
    });
  }, []);

  console.log(tweets);

  return (
    <section className={styles.mainBody}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Tweets</div>
      </div>
      <div className={styles.tweetUpdates}>
        {tweets.map((t, i) => (
          <TweetCard
            imageSrc={t.profile_image_url}
            handle={t.handle}
            date={t.date}
            content={t.content}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default TweetsBody;
