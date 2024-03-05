import { Col, Row, Select } from "antd";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import "animate.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";
import HomeScrollVideo from "./homeScrollVideo";
import HomeIntroduce from "./homeIntroduce";
import OurTrip from "./ourTrip";
import Weather from "./weather";
import Faq from "./faq";
import Traveller from "./traveller";
import Gallery from "./gallery";
import Family from "./family";
 
interface HomeProps {}

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
  
  return (
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
      {/* <div className={styles.homeScrollVideo}>
        <HomeScrollVideo/>
      </div> */}
      <div className={styles.homeIntroduce}>
        <HomeIntroduce/>
      </div>
      <div className={styles.homeOurTrip}>
        <OurTrip/>
      </div>
      <div className={styles.homeGallery}>
        <Gallery/>
      </div>
      <div className={styles.homeTraveller}>
        <Traveller/>
      </div>
      <div className={styles.homeFamily}>
        <Family/>
      </div>
      <div className={styles.homeWeather}>
        <Weather/>
      </div>
      <div className={styles.homeFaq}>
        <Faq/>
        
      </div>
    </div>
  );
};

export default Home;
