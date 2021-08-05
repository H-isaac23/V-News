import ReactPlayer from "react-player";
import styles from "./VideoCard.module.scss";

const VideoCards = ({ url }) => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer id={styles.player} url={url} height={"50%"} width={"50%"} />
    </div>
  );
};

export default VideoCards;
