import React from "react";
import Container from "../Container";
import s from "./header.module.scss"
import { BsGithub, BsLinkedin } from "react-icons/bs"






const Header: React.FC = () => {
  return(<header className={s.header}>

    <Container>
      <div className={s.header_box}>
      <h2>Voloshin Pavlo</h2>
        <div className={s.header_links}>
          <a href="https://github.com/VPagent" className={s.header_link}><BsGithub size={30} className={s.header_link_icon}/></a>
          <a href="https://www.linkedin.com/in/pavel-voloshin-406697228/" className={s.header_link}><BsLinkedin size={30} className={s.header_link_icon}/></a>
      </div>
      </div>

    </Container>
  </header>);
};

export default Header;
