import ReactPlayer from "react-player";
import styles from "./VideoCard.module.scss";

const VideoCards = ({ url }) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        id={styles.player}
        url={url}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default VideoCards;
