import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";
import styles from "./VideoCarousel.module.scss";

const sampleVideos = [
  "https://www.youtube.com/watch?v=DaT7j74W7zw",
  "https://www.youtube.com/watch?v=XwdR6yGVY1k",
  "https://www.youtube.com/watch?v=FGhIbI9AJr0",
  "https://www.youtube.com/watch?v=fSmrjBcTXu4",
  "https://www.youtube.com/watch?v=rG0mRyPLQ6A",
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 3,
  },
};

const VideoCarousel = () => {
  return (
    <div className={styles.container}>
      <Carousel responsive={responsive} infinite>
        {sampleVideos.map((url) => (
          <div className={styles.marginIndicator}>
            <div className={styles.playerWrapper}>
              <ReactPlayer
                id={styles.player}
                url={url}
                height={"100%"}
                width={"100%"}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
