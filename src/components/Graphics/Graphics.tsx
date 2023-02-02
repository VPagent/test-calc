import React, { useEffect, useMemo, useState } from "react";
import {
  calcBackBlaze,
  calcBunny,
  calcScaleWay,
  calcVultr,
  findLowerPrice,
} from "../../halpers/costsCalc";
import NamesBox from "../NamesBox";
import s from "./graphics.module.scss";
import { useMediaQuery } from 'react-responsive'
import { smallStyle } from "../../halpers/stylesCreator";

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
  const isBigScreen = useMediaQuery({
    query: '(min-width: 550px)'
  })

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
      <div className={s.table}>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={smallStyle("backblaze", minPrice, backblaze, "red", isBigScreen)}
          ></span>
          <p className={s.table_prices}>{backblaze}$</p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={smallStyle("bunny", minPrice, bunny,  "orange", isBigScreen)}
          ></span>
          <p className={s.table_prices}>{bunny}$</p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={smallStyle("scaleway", minPrice, scaleway, "pink", isBigScreen)}
          ></span>
          <p className={s.table_prices}>
            {scaleway < 0.00 ? "Free" : scaleway + `$`}
          </p>
        </div>
        <div className={s.table_column}>
          <span
            className={s.table_item}
            style={smallStyle("vultr", minPrice, vultr, "blue", isBigScreen)}
          ></span>
          <p className={s.table_prices}>{vultr}$</p>
        </div>
      </div>
      <NamesBox set={changeOption} />
    </div>
  );
};

export default Graphics;
