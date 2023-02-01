import React, { useState } from "react";
import { calcBackBlaze, calcBunny, calcScaleWay, calcVultr } from "../../halpers/costsCalc";
import NamesBox from "../NamesBox";
import s from "./graphics.module.scss";

type Props = {
  storage: number;
  transfer: number;
};

const Graphics: React.FC<Props> = ({ storage, transfer }) => {
    const [optionBunny, setOptionBunny] = useState('hdd')
    const [optionScaleWay, setOptionScaleWay] = useState('multi')

    const changeOption = (value: string) => {
       
        switch (value) {
            case 'hdd':
                return setOptionBunny(value)
            case 'ssd':
                return setOptionBunny(value)
            case 'multi':
                return setOptionScaleWay(value)
            case 'single':
                return setOptionScaleWay(value)
            default: console.log("error in case")
        }
    }
  return (
    <div className={s.wrapper}>
      <h2>Graphics</h2>
      <div className={s.table}>
        <div className={s.table_column}>
          <span className={s.table_item}></span>
          <p>{calcBackBlaze(storage, transfer)}$</p>
        </div>
        <div className={s.table_column}>
          <span className={s.table_item}></span>
                  <p>{calcBunny(storage, transfer, optionBunny)}$</p>
        </div>
        <div className={s.table_column}>
          <span className={s.table_item}></span>
                  <p>{ calcScaleWay(storage, transfer, optionScaleWay) < 1 ? "Free" : calcScaleWay(storage, transfer, optionScaleWay) +`$`}</p>
        </div>
        <div className={s.table_column}>
          <span className={s.table_item}></span>
                  <p>{ calcVultr(storage, transfer)}$</p>
        </div>
      </div>
      <NamesBox set={changeOption}/>
    </div>
  );
};

export default Graphics;
/* eslint-disable */