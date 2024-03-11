import styles from "./styles.module.scss";
import React from "react";
import type { MenuProps } from "antd";
import type { CSSProperties } from "react";
import "animate.css";
import type { CollapseProps } from "antd";
import { theme } from "antd";
import { Col, Collapse, Row } from "antd";
import {
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  desc7,
  desc8,
} from "../../until/until";
import { useState } from "react";

interface FaqProps {}

const Faq = () => {
  const [selected, setSelected] = useState("");
  const onChange = (value: any) => {
    console.log("value", value);
    setSelected(value);
  };
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    borderBottom: "none",
  };
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: (
        <label
          className={selected == "1" ? `${styles.selected}` : `${styles.label}`}
        >
          1. What is the Ha Giang loop?
        </label>
      ),
      children: <p className={styles.collapses}>{desc1}</p>,
      style: { selected: selected == "1" ? panelStyle : "" },
      //   style: panelStyle,
    },
    {
      key: "2",
      label: (
        <label
          className={selected == "2" ? `${styles.selected}` : `${styles.label}`}
        >
          2. Why should I visit the Ha Giang Loop?
        </label>
      ),
      children: <p className={styles.collapses}>{desc2}</p>,
    },
    {
      key: "3",
      label: (
        <label
          className={selected == "3" ? `${styles.selected}` : `${styles.label}`}
        >
          3. When is the best time to visit the loop?
        </label>
      ),
      children: <p className={styles.collapses}>{desc3}</p>,
    },
    {
      key: "4",
      label: (
        <label
          className={selected == "4" ? `${styles.selected}` : `${styles.label}`}
        >
          4. The highlighted attractions
        </label>
      ),
      children: <p className={styles.collapses}>{desc4}</p>,
    },
  ];
  const journeyItem: CollapseProps["items"] = [
    {
      key: "5",
      label: (
        <label
          className={selected == "5" ? `${styles.selected}` : `${styles.label}`}
        >
          5. How do we get there?
        </label>
      ),
      children: <p className={styles.collapses}>{desc5}</p>,
    },
    {
      key: "6",
      label: (
        <label
          className={selected == "6" ? `${styles.selected}` : `${styles.label}`}
        >
          6. How hard about the loop?
        </label>
      ),
      children: <p className={styles.collapses}>{desc6}</p>,
    },
    {
      key: "7",
      label: (
        <label
          className={selected == "7" ? `${styles.selected}` : `${styles.label}`}
        >
          7. What should I bring?
        </label>
      ),
      children: <p className={styles.collapses}>{desc7}</p>,
    },
    {
      key: "8",
      label: (
        <label
          className={selected == "8" ? `${styles.selected}` : `${styles.label}`}
        >
          8. Drive my own or with an easy rider?
        </label>
      ),
      children: <p className={styles.collapses}>{desc8}</p>,
    },
  ];
  type ExpandIconPosition = "start" | "end";
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("end");

  return (
    <>
      <div className={styles.wrapper}>
        <Row gutter={[0, 0]}>
          <Col flex={2}>
            {" "}
            <div className={styles.titleWraper}>
              <div className="subTitle animate__animated animate__fadeInUp">FAQ ABOUT</div>
              <div className="title animate__animated animate__fadeInUp">the loop</div>
              <div className="btnPrimary">BOOK NOW</div>
            </div>
          </Col>
          <Col flex={3}>
            {" "}
            <div className={styles.block}>
              <div className={styles.blockMenu}>
                <div className={`${styles.descWrap}`}>
                  <p className={`${styles.title} ${"animate__animated animate__fadeInRight"}`}>NATURE</p>
                  <span className={`${styles.desc} ${"animate__animated animate__fadeInRight"}`}>
                    Nature is not only all that visible to the eyes, it also
                    includes the inner picture of the soul.
                  </span>
                </div>
                <div className={styles.menu}>
                  <Collapse
                    items={getItems(panelStyle)}
                    accordion
                    onChange={onChange}
                    expandIconPosition={"end"}
                  />
                </div>
              </div>{" "}
              <div className={styles.blockMenu}>
                {" "}
                <div className={styles.descWrap}>
                  <p className={`${styles.title} ${"animate__animated animate__fadeInRight"}`}>JOURNEY</p>
                  <span className={`${styles.desc} ${"animate__animated animate__fadeInRight"}`}>
                    Today is a beautiful day and Happiness isn’t a destination,
                    it’s a journey we are on.
                  </span>
                </div>
                <div className={styles.menu}>
                  <Collapse
                    items={journeyItem}
                    accordion
                    onChange={onChange}
                    expandIconPosition={"end"}
                  />
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Faq;
