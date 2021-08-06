import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoCards from "./VideoCard";
import styles from "./VideoCarousel.module.scss";

const sampleVideos = [
  "https://www.youtube.com/watch?v=DaT7j74W7zw",
  "https://www.youtube.com/watch?v=XwdR6yGVY1k",
  "https://www.youtube.com/watch?v=FGhIbI9AJr0",
  "https://www.youtube.com/watch?v=fSmrjBcTXu4",
  "https://www.youtube.com/watch?v=rG0mRyPLQ6A",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class VideoCarousel extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Carousel
          responsive={responsive}
          infinite
          itemClass="carousel-item-padding-40-px"
        >
          {sampleVideos.map((url) => (
            <VideoCards url={url} />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default VideoCarousel;
