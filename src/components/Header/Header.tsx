import { Space } from "antd";
import styles from "./styles.module.scss";
import { FacebookFilled, YoutubeFilled, DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

interface HeaderProps {}
const Header = () => {
  return (
    <>
      <div className={styles.wraps}>
        <div className={styles.logoWraps}>
          <img
            className={styles.logoWrapImage}
            src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501660%2FLayer_1-1%2FLayer_1-1.png%3F_i%3DAA&w=96&q=75"
          />
        </div>
        <div className={styles.subMenu}>
          <ul className={styles.subMenuNav}>
            <li className={styles.menuItem}>
              HOME <div className={styles.point}></div>
            </li>
            <li className={styles.menuItem}>
              ABOUT US <div className={styles.point}></div>
            </li>
            <li className={`${styles.menuItem} ${styles.menuSelect}`}>
              TOUR <DownOutlined /> <div className={styles.point}></div>
              <div className={styles.subNavItem}>
                <li className={styles.subItem}>HÀ GIANG LOOP TOUR (4N3D)</li>
                <li className={styles.subItem}>HÀ GIANG LOOP TOUR (3N3D)</li>
              </div>
            </li>
            <li className={styles.menuItem}>
              DESTINATIONS <div className={styles.point}></div>
            </li>
            <li className={styles.menuItem}>
              BLOG <div className={styles.point}></div>
            </li>
            <li className={styles.menuItem}>
              FAQ <div className={styles.point}></div>
            </li>
            <li className={styles.menuItem}>
              CONTACT <div className={styles.point}></div>
            </li>
            <li className={styles.menuItem}>
              VIETNAM CHEERS HOTEL <div className={styles.point}></div>
            </li>
          </ul>
        </div>

        <div className={styles.subNavItem}>
          <li className={styles.subItem}>HÀ GIANG LOOP TOUR (4N3D)</li>
          <li className={styles.subItem}>HÀ GIANG LOOP TOUR (3N3D)</li>
        </div>
        <div className={styles.iconWrap}>
          <Space>
            <div className={styles.iconItem}>
              {" "}
              <FacebookFilled
                style={{
                  color: "#b34b1e",
                  fontSize: "1.75rem",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className={styles.iconItem}>
              {" "}
              <YoutubeFilled
                style={{
                  color: "#b34b1e",
                  fontSize: "1.75rem",
                  borderRadius: "50%",
                }}
              />
            </div>
          </Space>
        </div>
      </div>
    </>
  );
};

export default Header;
