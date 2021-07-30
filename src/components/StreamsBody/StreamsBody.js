import styles from "./StreamsBody.module.scss";

const StreamBody = () => {
  return (
    <section className={styles.streams}>
      <div className={styles.titleContainer}>
        <div className={styles.sectionTitle}>Recent Streams</div>
      </div>
    </section>
  );
};

export default StreamBody;
