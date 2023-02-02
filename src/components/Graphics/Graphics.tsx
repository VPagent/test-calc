import React, { useEffect, useMemo, useState } from "react";
import {
  calcBackBlaze,
  calcBunny,
  calcPercent,
  calcScaleWay,
  calcVultr,
  findLowerPrice,
} from "../../halpers/costsCalc";
import NamesBox from "../NamesBox";
import s from "./graphics.module.scss";

type Props = {
  storage: number;
  transfer: number;
};

const Graphics: React.FC<Props> = ({ storage, transfer }) => {
  const [optionBunny, setOptionBunny] = useState("hdd");
  const [optionScaleWay, setOptionScaleWay] = useState("multi");
  const [minPrice, setMinPrice] = useState("");
  const backblaze = useMemo(
    () => calcBackBlaze(storage, transfer),
    [storage, transfer]
  );
  const bunny = useMemo(
    () => calcBunny(storage, transfer, optionBunny),
    [storage, transfer, optionBunny]
  );
  const scaleway = useMemo(
    () => calcScaleWay(storage, transfer, optionScaleWay),
    [storage, transfer, optionScaleWay]
  );
  const vultr = useMemo(
    () => calcVultr(storage, transfer),
    [storage, transfer]
  );

  useEffect(() => {
    setMinPrice(findLowerPrice(backblaze, bunny, scaleway, vultr));
  }, [storage, transfer, optionBunny, optionScaleWay]);

  const changeOption = (value: string) => {
    switch (value) {
      case "hdd":
        return setOptionBunny(value);
      case "ssd":
        return setOptionBunny(value);
      case "multi":
        return setOptionScaleWay(value);
      case "single":
        return setOptionScaleWay(value);
      default:
        console.log("error in case");
    }
  };

  return (
    <div className={s.wrapper}>
      <h2>Graphics</h2>
      <div className={s.table}>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={{
              height: `${calcPercent(backblaze)}%`,
              backgroundColor: `${
                minPrice === "backblaze" ? "red" : "#504444"
              }`,
            }}
          ></span>
          <p className={s.table_prices}>{backblaze}$</p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={{
              height: `${calcPercent(bunny)}%`,
              backgroundColor: `${minPrice === "bunny" ? "orange" : "#504444"}`,
            }}
          ></span>
          <p className={s.table_prices}>{bunny}$</p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={{
              height: `${calcPercent(scaleway)}%`,
              backgroundColor: `${
                minPrice === "scaleway" ? "pink" : "#504444"
              }`,
            }}
          ></span>
          <p className={s.table_prices}>
            {scaleway < 0.0 ? "Free" : scaleway + `$`}
          </p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={{
              height: `${calcPercent(vultr)}%`,
              backgroundColor: `${minPrice === "vultr" ? "blue" : "#504444"}`,
            }}
          ></span>
          <p className={s.table_prices}>{vultr}$</p>
        </div>
      </div>
      <NamesBox set={changeOption} />
    </div>
  );
};

export default Graphics;
/* eslint-disable */
