import styles from "./StreamsBody.module.scss";
import VideoCards from "./VideoCard";

const StreamBody = () => {
  return (
    <section className={styles.streams}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Streams</div>
      </div>
      <VideoCards />
    </section>
  );
};

export default StreamBody;
