import ReactPlayer from "react-player";
import styles from "./VideoCard.module.scss";

const sampleUrl = "https://www.youtube.com/watch?v=XwdR6yGVY1k&pp=sAQA";

const VideoCards = () => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        id={styles.player}
        url={sampleUrl}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default VideoCards;
