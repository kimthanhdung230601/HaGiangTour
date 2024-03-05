import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
interface LayoutProps {}

const Layout = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
