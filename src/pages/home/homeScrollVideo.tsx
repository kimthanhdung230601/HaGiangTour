import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Carousel } from "antd";

const HomeScrollVideo = () => {
  const { scrollYProgress } = useViewportScroll();
  const [isMaxSizeReached, setIsMaxSizeReached] = useState(false);
  const [videoWidth, setVideoWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const video = document.querySelector(".video"); // Replace with the actual video selector

      if (video) {
        const width = video.getBoundingClientRect().width;
        setVideoWidth(width);
        const isMaxSize = width >= window.innerWidth;
        setIsMaxSizeReached(isMaxSize);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.2, isMaxSizeReached ? 1 : 1.5] // Adjust the maximum scale factor (e.g., 1.5)
  );
  const contentStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.wrapperScrollVideo}>
      <div className={styles.title}>
        {" "}
        <h1>WELLCOME</h1>
        <h1>HA GIANG LOOP</h1>
      </div>

      <Carousel afterChange={onChange} effect="fade">
        <div>
          <div style={contentStyle}>
            <div className={styles.wrapper}>
              {" "}
              <motion.div
                className={styles.container}
                style={{
                  scale,
                }}
              >
                <motion.video
                  className={styles.item}
                  style={{
                    scaleY: scrollYProgress,
                  }}
                  autoPlay
                  loop
                >
                  <source
                    src="https://ha-giang-tour.s3.ap-southeast-1.amazonaws.com/2023%2F10%2Fcheers-desktop.mp4"
                    type="video/mp4"
                  />{" "}
                </motion.video>
              </motion.div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className={styles.wrapper}>
              {" "}
              <motion.div
                className={styles.container}
                style={{
                  scale,
                }}
              >
                <motion.video
                  className={styles.item}
                  style={{
                    scaleY: scrollYProgress,
                  }}
                  autoPlay
                  loop
                >
                  <source
                    src="https://hagiangcheerstours.com/images/video1.mp4"
                    type="video/mp4"
                  />{" "}
                </motion.video>
              </motion.div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <div className={styles.wrapper}>
        {" "}
        <motion.div
          className={styles.container}
          style={{
            scale,
          }}
        >
          <motion.video
            className={styles.item}
            style={{
              scaleY: scrollYProgress,
            }}
            autoPlay
            loop
          >
            <source
              src="https://ha-giang-tour.s3.ap-southeast-1.amazonaws.com/2023%2F10%2Fcheers-desktop.mp4"
              type="video/mp4"
            />{" "}
          </motion.video>
        </motion.div>
      </div> */}
      {/* <div className={styles.wrapper}>
        {" "}
        <motion.div
          className={styles.container}
          style={{
            scale,
          }}
        >
          <motion.video
            className={styles.item}
            style={{
              scaleY: scrollYProgress,
            }}
            autoPlay
            loop
          >
            <source
              src="https://hagiangcheerstours.com/images/video1.mp4"
              type="video/mp4"
            />{" "}
          </motion.video>
        </motion.div>
      </div> */}
    </div>
  );
};

export default HomeScrollVideo;
