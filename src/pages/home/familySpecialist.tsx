import styles from "./family.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rates, specialises } from "../../until/until";
import { Rate, Row, Col } from "antd";
import { useRef } from "react";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
interface RiderTeamProps {}

const Specialist = () => {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.specialistWrap}>
        <div className={styles.slickWrap}>
          <Row>
            <Col span={1}>
              <div className={styles.button} onClick={previous}>
                <CaretLeftFilled className={styles.item} />
              </div>
            </Col>
            <Col span={22}>
              {" "}
              <div className="slider-container">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  {specialises.map((specialis: any) => {
                    return (
                      <>
                        <div className={styles.block}>
                          <div className={styles.imgBlock}>
                            <div className={styles.overlay}>
                              <img
                                className={styles.img}
                                src={specialis.scr}
                                alt={specialis.name}
                              />
                              <div className={styles.infor}>
                                <div className={styles.inforBlock}>
                                  <div className={styles.decs}>
                                    {specialis.name}
                                  </div>
                                  <div className={styles.obj}>
                                    {specialis.obj}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col span={1}>
              {" "}
              <div className={styles.button} onClick={next}>
                <CaretRightFilled className={styles.item} />
              </div>
            </Col>
          </Row>{" "}
        </div>
      </div>
    </>
  );
};

export default Specialist;
