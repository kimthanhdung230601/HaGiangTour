import { Col, Row, Select } from "antd";
import styles from "./styles.module.scss";
import "animate.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import HomeIntroduce from "./homeIntroduce";
import OurTrip from "./ourTrip";
import Weather from "./weather";
import Faq from "./faq";
import Traveller from "./traveller";
import Gallery from "./gallery";
import Family from "./family";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const [basic, setBasicBike] = useState(1);
  const [bigBike, setBigBike] = useState(1);
  var sum = basic * 199 + bigBike * 239;
  const handleIncreaseBasicBike = () => {
    setBasicBike(basic + 1);
  };
  const handleDecreaseBasicBike = () => {
    basic > 0 ? setBasicBike(basic - 1) : setBasicBike(0);
  };
  const handleIncreaseBigBike = () => {
    setBigBike(bigBike + 1);
  };
  const handleDecreaseBigBike = () => {
    bigBike > 0 ? setBigBike(bigBike - 1) : setBigBike(0);
  };
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const onChange1 = (visible: any) => {
    setIsVisible1(visible);
  };

  const onChange2 = (visible: any) => {
    setIsVisible2(visible);
  };
  const onChange3 = (visible: any) => {
    setIsVisible3(visible);
  };
  const onChange4 = (visible: any) => {
    setIsVisible4(visible);
  };
  const onChange5 = (visible: any) => {
    setIsVisible5(visible);
  };
  const onChange6 = (visible: any) => {
    setIsVisible6(visible);
  };
  const onChange7 = (visible: any) => {
    setIsVisible7(visible);
  };
  const onChange8 = (visible: any) => {
    setIsVisible8(visible);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Ẩn header khi cuộn xuống và hiện khi cuộn lên trên
      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 10) ||
          currentScrollPos < 10
      );

      // Lưu giữ vị trí cuộn hiện tại để so sánh ở lần cuộn tiếp theo
      setPrevScrollPos(currentScrollPos);
    };

    // Thêm sự kiện lắng nghe cuộn
    window.addEventListener("scroll", handleScroll);

    // Loại bỏ sự kiện lắng nghe khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <>
      {" "}
      <div className={styles.wrap}>
        <div className={styles.background}>
          <div
            className={`${styles.title} animate__animated animate__fadeInBottomLeft`}
          >
            <p className={styles.sloganP}>Back to</p>
            <b className={styles.sloganB}>nature</b>
          </div>
          <div className={styles.bookNow}>
            <Row gutter={[16, 16]}>
              <Col span={10} xs={24} sm={10} md={10} lg={10} xl={10}>
                <p className={styles.labelText}>TOUR</p>
                <Select
                  defaultValue="HA GIANG LOOP TOUR (3N3D)"
                  style={{ width: 260 }}
                  options={[
                    {
                      value: "HA GIANG LOOP TOUR (3N3D)",
                      label: "HA GIANG LOOP TOUR (3N3D)",
                    },
                    {
                      value: "HA GIANG LOOP TOUR (4N4D)",
                      label: "HA GIANG LOOP TOUR (4N4D)",
                    },
                  ]}
                />
              </Col>
              <Col span={10} xs={24} sm={10} md={10} lg={10} xl={10}>
                <div className={styles.riderBlock}>
                  {" "}
                  <div className={styles.riderWrap}>
                    <span className={styles.labelText}>
                      EASY RIDER - BASIC BIKE
                    </span>
                    <div className={styles.riderAmout}>
                      {" "}
                      <p className={styles.amount}>{basic} pax</p>
                      <div className={styles.btnGroup}>
                        <button
                          className={styles.btn}
                          onClick={() => {
                            handleDecreaseBasicBike();
                          }}
                        >
                          <MinusOutlined />
                        </button>{" "}
                        <button
                          className={styles.btn}
                          onClick={() => {
                            handleIncreaseBasicBike();
                          }}
                        >
                          <PlusOutlined />
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div className={styles.riderWrap}>
                    <span className={styles.labelText}>
                      EASY RIDER - BIG BIKE
                    </span>
                    <div className={styles.riderAmout}>
                      {" "}
                      <p className={styles.amount}>{bigBike} pax</p>
                      <div className={styles.btnGroup}>
                        <button
                          className={styles.btn}
                          onClick={() => handleDecreaseBigBike()}
                        >
                          <MinusOutlined />
                        </button>{" "}
                        <button
                          className={styles.btn}
                          onClick={() => {
                            handleIncreaseBigBike();
                          }}
                        >
                          <PlusOutlined />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={4} xs={24} sm={24} md={4} lg={4} xl={4}>
                {/* <button className={`styles.btnWrap`}> */}
                <button
                  className={
                    sum === 0 ? `${styles.btnDisble}` : `${styles.btnWrap}`
                  }
                >
                  <p className={styles.sum}>${sum}</p>
                  <p className={styles.book}>BOOK NOW</p>
                </button>
              </Col>
            </Row>
          </div>
        </div>
        <VisibilitySensor onChange={onChange1} partialVisibility>
          <div className={`box ${isVisible1 ? "visible" : ""}`}>
            <div className={styles.homeIntroduce}>
              <HomeIntroduce />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange2} partialVisibility>
          <div className={`box ${isVisible2 ? "visible" : ""}`}>
            <div className={styles.homeOurTrip}>
              <OurTrip />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange3} partialVisibility>
          <div className={`box ${isVisible3 ? "visible" : ""}`}>
            {" "}
            <div className={styles.homeGallery}>
              <Gallery />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange4} partialVisibility>
          <div className={`box ${isVisible4 ? "visible" : ""}`}>
            {" "}
            <div className={styles.homeTraveller}>
              <Traveller />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange5} partialVisibility>
          <div className={`box ${isVisible5 ? "visible" : ""}`}>
            {" "}
            <div className={styles.homeFamily}>
              <Family />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange6} partialVisibility>
          <div className={`box ${isVisible6 ? "visible" : ""}`}>
            {" "}
            <div className={styles.homeWeather}>
              <Weather />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange7} partialVisibility>
          <div className={`box ${isVisible7 ? "visible" : ""}`}>
            {" "}
            <div className={styles.homeFaq}>
              <Faq />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor onChange={onChange8} partialVisibility>
          <div className={`box ${isVisible8 ? "visible" : ""}`}></div>
        </VisibilitySensor>
      </div>
    </>
  );
};

export default Home;
