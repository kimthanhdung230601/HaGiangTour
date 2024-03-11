import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import "animate.css";
import Home from "../home";
interface LayoutProps {}

const Layout = () => {
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
      {visible && (
        <div>
          {" "}
          <div className={styles.content}>
            <div className={styles.header}>
              <Header />
            </div>
          </div>
        </div>
      )}

      <Home />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
