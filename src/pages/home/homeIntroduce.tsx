import styles from "./styles.module.scss";
import style from "../../globalStyles/index"
interface HomeIntroduceProps {}

const HomeIntroduce = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.wrapperIntroduce}>
            <div className={styles.wrapperTitle}>
              <h3 className={"subTitle" }>START WITH</h3>
              <h2 className={"title"}>HA GIANG</h2>
              <h2 className={"title"}>CHEERS TOUR</h2>
            </div>
          </div>
          <div className={styles.wrapperSelect}>
            <div className={`${styles.selectItem} ${styles.select1}`}>
              SUPPORT LOCAL - SUSTAINABLE TRAVEL
              <img
                className={styles.bg}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Fbg-text-cheer.png&w=1480&q=75"
              />
            </div>
            <div className={`${styles.selectItem} ${styles.select2}`}>
              FREE 100% CANCELLATION
              <img
                className={styles.bg}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Fbg-text-cheer.png&w=1480&q=75"
              />
            </div>
            <div className={`${styles.selectItem} ${styles.select3}`}>
              DAILY DEPARTURES
              <img
                className={styles.bg}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Fbg-text-cheer.png&w=1480&q=75"
              />
            </div>
            <div className={`${styles.selectItem} ${styles.select4}`}>
              MAKE MORE FRIENDS
              <img
                className={styles.bg}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Fbg-text-cheer.png&w=1480&q=75"
              />
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.contenr1}>
              <b>The Ha giang Loop Cheers Tour</b> with easy rider organized by
              <b>Vietnam Cheers Hostel</b> is a must in Vietnam for any
              traveller. It is considered a highlight of South East Asia.
            </span>
            <br />
            <span className={styles.contenr2}>
              Explore <b>Ma Pi Leng</b>, one of The Big Four Passes in Vietnam,
              through thousands of conical limestone peaks as well as deep and
              meandering valleys. Party dinner with families, waterfall and
              local life at authentic <b>Cheers Du Gia Homestay</b> will be the
              unique experience as well. This is designed for adventure-seekers
              — those who want to experience the biggest challenge Vietnam has
              to offer in a safe environment with our experienced easy riders.
            </span>
          </div>
          <div className={styles.buttonWrapper}>
            <button className="btnPrimary">BOOK NOW</button>
            <button className="btnBorder">READ MORE</button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.wraperimage}>
            <img src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501792%2Fmapvn%2Fmapvn.png%3F_i%3DAA&w=1480&q=100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIntroduce;
