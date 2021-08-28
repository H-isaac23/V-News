import styles from "./Description.module.scss";
import group_image from "../../public/hololive.png";

const Description = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>Holo-Updates</div>
        <div className={styles.info_container}>
          <div className={styles.intro}>
            Welcome to V-Updates, a fan site to bring the latest tweets and
            streams of various virtual youtubers (a.k.a. V-Tubers).
          </div>
          <div className={styles.page_info}>
            You are currently on the Hololive page of the website.
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img src={group_image} alt="Vtuber group" />
      </div>
    </div>
  );
};

export default Description;
