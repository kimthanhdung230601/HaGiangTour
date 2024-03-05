import { Col, Row } from "antd";
import styles from "./family.module.scss";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { teams } from "../../until/until";

interface RiderTeamProps {}

const RiderTeam = () => {
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const [activeSlide, setActiveSlide] = useState(0);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (next: any) => {
      setActiveSlide(next);
    },
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
      <div className={styles.RiderWrapper}>
        <Row>
          <Col span={12}>
            <p>
              BeforeChange {"=>"} activeSlide: <strong>{activeSlide}</strong>
            </p>
          </Col>
          <Col span={12}>
            {" "}
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
                      {teams.map((team: any) => {
                        return (
                          <>
                            <div className={styles.block}>
                              <div className={styles.imgBlock}>
                                <div className={styles.overlay}>
                                  <img
                                    className={styles.img}
                                    src={team.scr}
                                    alt={team.teamName}
                                  />
                                  {/* <div className={styles.infor}>
                                    <div className={styles.inforBlock}>
                                      <div className={styles.decs}>
                                        {team.teamName}
                                      </div>
                                      <div className={styles.obj}>
                                        {team.obj}
                                      </div>
                                    </div>
                                  </div> */}
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
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RiderTeam;
