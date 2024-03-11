import { Col, Row } from "antd";
import styles from "./styles.module.scss";
interface FooterProps {}

const Footer = () => {
  return (
    <>
      <div className={styles.footerWrap}>
        <Row justify="center">
          <Col span={6}>
            <div className={styles.imgWrapper}>
              <img src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501517%2Flogo-footer%2Flogo-footer.png%3F_i%3DAA&w=256&q=75" />{" "}
            </div>
          </Col>
          <Col span={6}>
            <h2 className={styles.title}>CONTACT US</h2>
            <ul>
              <li>
                +84 98 3333 986 (Linnete ) <br></br>+84 85 668 0000 (Kevin )
              </li>
              <li>Cheershostel1@gmail.com</li>
              <li> icon 5 Au Trieu, Hoan Kiem, Ha Noi</li>
              <li> Vietnam Cheers Hostel Official Site</li>
            </ul>
          </Col>
          <Col span={6}>
            <h2 className={styles.title}>ALL TOUR</h2>
            <ul>
              <li>HA GIANG LOOP TOUR (4D4N)</li>
              <li> HA GIANG LOOP TOUR (3D3N)</li>
            </ul>
          </Col>
          <Col span={6}>
            <h2 className={styles.title}>CHEERS TOURS</h2>
            <ul>
              <li>Ha Long Bay on Social Cruise</li>
              <li>Sapa Trekking Tour </li>
              <li> Package Tour</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
