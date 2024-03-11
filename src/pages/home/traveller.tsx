import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rates } from "../../until/until";
import { Rate, Row, Col } from "antd";
import { useRef } from "react";
import "animate.css";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
interface TravellerProps {}

const Traveller = () => {
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
    slidesToShow: 3,
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
      <div className={styles.wrapper}>
        <div className={styles.titleWrap}>
          <p className="subTitle animate__animated animate__fadeInUp">FROM OUR</p>
          <p className="title animate__animated animate__fadeInUp">TRAVELLERS</p>
        </div>
        <div className={styles.slickWrap}>
          <Row>
            <Col span={2}>
              <div className={styles.button} onClick={previous}>
                <CaretLeftFilled className={styles.item} />
              </div>
            </Col>
            <Col span={20}>
              {" "}
              <div className="slider-container">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  {rates.map((rate: any) => {
                    return (
                      <>
                        <div className={styles.block}>
                          <div className={styles.decs}>{rate.decs}</div>
                          <Rate
                            className={styles.star}
                            disabled
                            defaultValue={5}
                          />
                          <div className="subTitle">{rate.name}</div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col span={2}>
              {" "}
              <div className={styles.button} onClick={next}>
                <CaretRightFilled className={styles.item} />
              </div>
            </Col>
          </Row>{" "}
        </div>

        <div className={styles.viewWrap}>
          <p>View us on:</p>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501655%2Fimage-1815-1%2Fimage-1815-1.png%3F_i%3DAA&w=128&q=75"
            />
            <img
              className={styles.img}
              src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501689%2Fgoogle%2Fgoogle.png%3F_i%3DAA&w=128&q=75"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Traveller;
