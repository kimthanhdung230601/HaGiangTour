import React, { useMemo, useState } from "react";
import { Button, Checkbox, Divider, Tabs, TabsProps } from "antd";
import styles from "./styles.module.scss";
import RiderTeam from "./familyRiderTeam";
import "animate.css";
import Specialist from "./familySpecialist";
import Host from "./familyHost";
import Leader from "./familyleader";

interface FamilyProps {}
const CheckboxGroup = Checkbox.Group;

const operations = <Button>Extra Action</Button>;

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: (
    <div className={styles.titleWrap}>
      <div className="subTitle animate__animated animate__fadeInUp">CHEERS</div>
      <div className="title animate__animated animate__fadeInUp">FAMILY</div>
    </div>
  ),
  right: <></>,
};

const options = ["left", "right"];

type PositionType = "left" | "right";
const Family = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "RIDER TEAM",
      children: <RiderTeam/> ,
    },
    {
      key: "2",
      label: "SPECIALIST",
      children: <Specialist/>,
    },
    {
      key: "3",
      label: "LOCAL HOST",
      children: <Specialist/>,
    },
    {
      key: "4",
      label: "TOUR LEADER",
      children:<Specialist/>,
    },
  ];
  const [position, setPosition] = useState<PositionType[]>(["left", "right"]);

  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);

  return (
    <>
      <div className={styles.wrapper}>
        <Tabs tabBarExtraContent={slot} items={items} />
      </div>
    </>
  );
};

export default Family;
