import styles from "./styles.module.scss";
interface OurTripProps {}

const OurTrip = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={"subTitle"}>out </h3>
          <p className={"title"}> great trips </p>
        </div>
        <div className={styles.contentsWrapper}>
          <div className={styles.contents}>
            <div className={styles.imgWrapper}>
              {" "}
              <div className={styles.ads}>
                {" "}
                <span className={styles.addsItem}>
                  <h3>$199</h3> <p>EASY RIDER - BASIC BIKE</p>
                </span>
                <span className={styles.addsItem}>
                  <h3>$239</h3> <p>EASY RIDER - BIG BIKE</p>
                </span>
              </div>
              <div className={styles.imgItem}>
                <img
                  className={styles.imgs}
                  src={require("../../assets/image/ads2.jpg")}
                />{" "}
              </div>
            </div>
            <div className={styles.contentItem}>
              <div className={styles.title}>HA GIANG LOOP TOUR (3D3N)</div>
              <div className={styles.desc}>
                <ul className={styles.itemList} style={{padding:"0"}}>
                  <li>
                    <b>Pick up: </b> Hanoi,Airport, Cat ba island, Ninh Binh or
                    any hotel in Ha Giang city
                  </li>
                  <li>
                    <b>Group size: </b>10-15pax
                  </li>
                  <li>
                    <b>Transport:</b> Slepper bus & Motorbike with local easy
                    rider{" "}
                  </li>
                </ul>
              </div>
              <div className={styles.btnWrapper}>
                <button className="btnPrimary">BOOK NOW</button>
                <button className="btnBorder">VIEW TOUR</button>
              </div>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.imgWrapper}>
              {" "}
              <div className={styles.ads}>
                {" "}
                <span className={styles.addsItem}>
                  <h3>$269</h3> <p>EASY RIDER - BASIC BIKE</p>
                </span>
                <span className={styles.addsItem}>
                  <h3>$299</h3> <p>EASY RIDER - BIG BIKE</p>
                </span>
              </div>
              <div className={styles.imgItem}>
                <img
                  className={styles.imgs}
                  src={require("../../assets/image/ads2.jpg")}
                />{" "}
              </div>
            </div>
            <div className={styles.contentItem}>
              <div className={styles.title}>HA GIANG LOOP TOUR (4N4D)</div>
              <div className={styles.desc}>
                <ul className={styles.itemList} style={{padding:"0"}}>
                  <li>
                    <b>Pick up: </b> Hanoi,Airport, Cat ba island, Ninh Binh or
                    any hotel in Ha Giang city
                  </li>
                  <li>
                    <b>Group size: </b>9-12pax
                  </li>
                  <li>
                    <b>Transport:</b> Slepper bus & Motorbike with local easy
                    rider{" "}
                  </li>
                </ul>
              </div>
              <div className={styles.btnWrapper}>
                <button className="btnPrimary">BOOK NOW</button>
                <button className="btnBorder">VIEW TOUR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTrip;
