import { Col, Row } from "antd";
import styles from "./family.module.scss";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";
import { teams } from "../../until/until";

interface RiderTeamProps {}

const RiderTeam = () => {
  let sliderRef: any = useRef(null);
  const [activeSlide, setActiveSlide] = useState<any>();
  const [teamDetails, setTeamDetails] = useState<any>();

  const next = () => {
    sliderRef.current.slickNext();
    const currentTeam = teams[sliderRef.current.slickCurrentSlide()];
    setTeamDetails(currentTeam);
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    const currentTeam = teams[sliderRef.current.slickCurrentSlide()];
    setTeamDetails(currentTeam);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    beforeChange: (current: any, next: any) => {
      setActiveSlide(next);
      setTeamDetails(teams[next]);
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
            <div className={`${styles.teamDetails} ${"animate__animated animate__fadeInLeft"}`}>
              <h2>{teamDetails?.teamName || "KIM THACH TEAM"}</h2>
              <p className={styles.content}>
                {teamDetails?.teamContent ||
                  "Now, thanks to you who brought tourism to our area, we are provided with new opportunities to earn sustainable incomes, helping our families and our communities to prosper. With every trip experience, we are not just your Easyrider, but also your travel buddies. We are looking forward to meeting you!"}
              </p>
              <label>Group size: </label>{" "} 
              <span className={styles.content}>{teamDetails?.teamSize || "9 members"}</span> <br></br>
              <label>Transport: </label>
              <span className={styles.content}>Motobikes</span> <br></br>
              <label>Trip completed: </label>{" "}
              <span className={styles.content}>{teamDetails?.teamSize || "134 trips"}</span>
            </div>
          </Col>
          <Col span={12}>
            {" "}
            <div className={styles.slickWrap}>
              <Row>
                <Col className={styles.btnIcon} span={1}>
                  <div className={styles.button} onClick={previous}>
                    <CaretLeftFilled className={styles.itemIcon} />
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
                            <div className={`${styles.block} ${"animate__animated animate__zoomIn"}`}>
                              <div className={styles.imgBlock}>
                                <div className={styles.overlay}>
                                  <img
                                    className={styles.img}
                                    src={team.scr}
                                    alt={team.teamName}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Slider>
                  </div>
                </Col>
                <Col span={1} className={styles.btnIcon}>
                  {" "}
                  <div className={styles.buttonIcon} onClick={next}>
                    <CaretRightFilled className={styles.itemIcon} />
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
