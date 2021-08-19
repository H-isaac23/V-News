import styles from "./TweetsBody.module.scss";
import TweetCard from "./TweetsCard";
import user_pfp from "../../public/rushia.jpg";
import { useEffect, useState } from "react";
import getTweets from "../../services/Bodies";

const TweetsBody = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then((response) => {
      setTweets(response.data);
    });
  }, []);

  return (
    <section className={styles.mainBody}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Tweets</div>
      </div>
      <div className={styles.tweetUpdates}>
        {tweets.map((t, i) => (
          <TweetCard
            imageSrc={user_pfp}
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
