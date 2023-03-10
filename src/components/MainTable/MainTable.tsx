import React, { ChangeEvent, useState } from "react";
import Container from "../Container";
import Graphics from "../Graphics";
import s from './mainTable.module.scss';


const MainTable: React.FC = () => {
    const [storage, setStorage] = useState(100);
  const [transfer, setTransfer] = useState(400);
  
  

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        switch (e.target.name) {
            case "storage":
                return setStorage(Number(e.target.value));
            case "transfer":
                return setTransfer(Number(e.target.value));
            default: console.log("error in case")
        }
        
  };
  return (
    <section className={s.section}>
    <Container>
    <div className={s.wrapper}>
      <Graphics storage={ storage } transfer={ transfer } />
          <div className={s.inputBox}>
              <label className={s.label}>
                  Storage: {storage} GB
          <input
            className={s.input}
            onChange={handleChange}
            type="range"
            name="storage"
            min="0"
            max="1000"
          />
        </label>
              <label className={s.label}>
                  Transfer: {transfer} GB
          <input
            className={s.input}
            onChange={handleChange}
            type="range"
            name="transfer"
            min="0"
            max="1000"
          />
        </label>
      </div>
      
      </div>
      </Container>
      </section>
  );
};

export default MainTable;
