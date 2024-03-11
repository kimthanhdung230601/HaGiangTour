import { useState } from "react";
import "animate.css";
import styles from "./styles.module.scss";
import {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JULY,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC,
} from "../../until/until";


const Weather = () => {
  const [selected, setSelected] = useState(JAN);
  const handleSelect = (value: any) => {
    setSelected(value);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.titleWrap}>
          <div className={"subTitle animate__animated animate__fadeInUp"}>WEATHER FORECAST OF</div>
          <div className={"title animate__animated animate__fadeInUp"}>HA GIANG</div>
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img} src={selected}   alt="noImage"/>
        </div>
        <div className={styles.buttonWrap}>
          <div
            className={
              selected === JAN ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(JAN);
            }}
          >
            JAN
          </div>
          <div
            className={
              selected === FEB ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(FEB);
            }}
          >
            FEB
          </div>
          <div
            className={
              selected === MAR ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(MAR);
            }}
          >
            MAR
          </div>
          <div
            className={
              selected === APR ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(APR);
            }}
          >
            APR
          </div>
          <div
            className={
              selected === MAY ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(MAY);
            }}
          >
            MAY
          </div>
          <div
            className={
              selected === JUN ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(JUN);
            }}
          >
            JUN
          </div>
          <div
            className={
              selected === JULY ? ` ${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(JULY);
            }}
          >
            JULY
          </div>
          <div
            className={
              selected === AUG ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(AUG);
            }}
          >
            AUG
          </div>
          <div
            className={
              selected === SEP ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(SEP);
            }}
          >
            SEP
          </div>
          <div
            className={
              selected === OCT ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(OCT);
            }}
          >
            OCT
          </div>
          <div
            className={
              selected === NOV ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(NOV);
            }}
          >
            NOV
          </div>
          <div
            className={
              selected === DEC ? `${styles.selected}` : `${styles.btn}`
            }
            onClick={() => {
              handleSelect(DEC);
            }}
          >
            DEC
          </div>
        </div>
        <div className={styles.suggestWrap}>
          <p className={styles.suggest}>
            A lovely time to travel. Excellent wildlife sightseeing
          </p>
          <div className={styles.iconWrap}>
            <div className={styles.iconItem}>
              <img
                className={styles.image}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Fsun.svg&w=48&q=75"
                alt="noImage"
              />
              <p>17 - 18 degree</p>
            </div>
            <div className={styles.iconItem}>
              <img
                className={styles.image}
                src="https://hagiangcheerstours.com/_next/image?url=%2Fimages%2Frain.svg&w=48&q=75"
                alt="noImage"
              />
              <p>65 - 80 mm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
