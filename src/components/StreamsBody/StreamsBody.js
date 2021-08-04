import styles from "./StreamsBody.module.scss";
import VideoCards from "./VideoCard";

const sampleVideos = [
  "https://www.youtube.com/watch?v=DaT7j74W7zw",
  "https://www.youtube.com/watch?v=XwdR6yGVY1k",
  "https://www.youtube.com/watch?v=FGhIbI9AJr0",
  "https://www.youtube.com/watch?v=fSmrjBcTXu4",
  "https://www.youtube.com/watch?v=rG0mRyPLQ6A",
];

const StreamBody = () => {
  return (
    <section className={styles.streams}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Streams</div>
      </div>
      <div className={styles.scrollers}>
        <div className={styles.left}>L</div>
        <div className={styles.right}>R</div>
      </div>
      <div className={styles.videoList}>
        {sampleVideos.map((url) => (
          <VideoCards url={url} />
        ))}
      </div>
    </section>
  );
};

export default StreamBody;
