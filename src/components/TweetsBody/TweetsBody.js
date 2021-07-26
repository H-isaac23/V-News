import styles from "./TweetsBody.module.scss";
import TweetCard from "./TweetsCard";
import user_pfp from "../../public/rushia.jpg";

const date = "July 26, 2021";
const handle = "@uruharushia";

const TweetsBody = () => {
  return (
    <section className={styles.main}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Tweets</div>
      </div>
      <TweetCard imageSrc={user_pfp} handle={handle} date={date} />
    </section>
  );
};

export default TweetsBody;
