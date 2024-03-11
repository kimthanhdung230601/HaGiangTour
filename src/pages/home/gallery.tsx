import styles from "./styles.module.scss";
import "animate.css";

interface GalleryProps {}

const Gallery = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleWrap}>
          <p className="subTitle  animate__animated animate__fadeInUp">DISCOVER</p>
          <p className="title  animate__animated animate__fadeInUp ">THE GALLERY</p>
        </div>
        <div className={`${styles.listWrap} ${" animate__animated animate__fadeInUp"}`}>
          <div className={styles.listItem}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501479%2Fexperience%2Fexperience.jpeg%3F_i%3DAA&w=992&q=75"
              />
              <div className={styles.btn}>
                <p>Experience</p>
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699501195%2FCheers-DuGia-Landscape-1%2FCheers-DuGia-Landscape-1.jpg%3F_i%3DAA&w=992&q=75"
              />
              <div className={styles.btn}>
                <p>Stay in Style</p>
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fhagiangcheerstours%2Fimages%2Ff_auto%2Cq_auto%2Fv1699504520%2Ffood%2Ffood.jpg%3F_i%3DAA&w=992&q=75"
              />
              <div className={styles.btn}>
                <p>Food</p>
              </div>
            </div>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="https://hagiangcheerstours.com/_next/image?url=https%3A%2F%2Fcms.hagiangcheerstours.com%2Fwp-content%2Fuploads%2F2023%2F10%2F3.jpeg&w=992&q=75"
              />
              <div className={styles.btn}>
                <p>People</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
