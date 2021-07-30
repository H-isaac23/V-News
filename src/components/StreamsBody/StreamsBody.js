import styles from "./StreamsBody.module.scss";
import VideoCards from "./VideoCard";

const StreamBody = () => {
  return (
    <section className={styles.streams}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Streams</div>
      </div>
      <div className={styles.videoList}>
        <VideoCards />
        <VideoCards />
        <VideoCards />
      </div>
    </section>
  );
};

export default StreamBody;
