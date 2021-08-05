import styles from "./StreamsBody.module.scss";
import VideoCarousel from "./VideoCarousel";

const StreamBody = () => {
  return (
    <section className={styles.streams}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Streams</div>
      </div>
      <div className={styles.videoList}>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default StreamBody;
