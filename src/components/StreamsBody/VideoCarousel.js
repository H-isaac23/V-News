import React, { Component } from "react";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import VideoCards from "./VideoCard";
import styles from "./VideoCarousel.module.scss";

const sampleVideos = [
  "https://www.youtube.com/watch?v=DaT7j74W7zw",
  "https://www.youtube.com/watch?v=XwdR6yGVY1k",
  "https://www.youtube.com/watch?v=FGhIbI9AJr0",
  "https://www.youtube.com/watch?v=fSmrjBcTXu4",
  "https://www.youtube.com/watch?v=rG0mRyPLQ6A",
];

class VideoCarousel extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Carousel>
          {sampleVideos.map((url) => (
            <VideoCards url={url} />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default VideoCarousel;
