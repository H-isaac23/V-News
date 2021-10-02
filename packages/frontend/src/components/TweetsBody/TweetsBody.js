import styles from "./TweetsBody.module.scss";
import TweetCard from "./TweetsCard";
import { useEffect, useState } from "react";
import services from "../../services/Bodies";

const TweetsBody = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    services.getTweets().then((response) => {
      setTweets(
        response.data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10)
      );
    });
  }, []);

  // for getting new tweets, will implement the functionality later
  // useEffect(() => {
  //   services.getAccounts().then((accounts) => {
  //     console.log(accounts);
  //     services.reloadTweets(accounts.data).then((_) => {
  //       services.getTweets().then((response) => {
  //         setTweets(
  //           response.data
  //             .sort((a, b) => new Date(b.date) - new Date(a.date))
  //             .slice(0, 10)
  //         );
  //       });
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   services.getAccounts().then((response) => {
  //     console.log(response.data);
  //   });
  // });

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
            tweet_id={t.tweet_id}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default TweetsBody;
