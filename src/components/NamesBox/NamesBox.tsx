import React, { ChangeEvent  } from 'react'
import { icons } from '../../infoOfCompanies/info'
import s from './namesBox.module.scss'

type Props = {
    set: (value:string) => void
}
const NamesBox: React.FC<Props> = ({ set }) => {

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        set(e.target.value)
    }
    
    return (
        <div className={s.namesBox}>
        <div className={s.namesBox_name}>
                <p className={s.namesBox_name_title}>Backblaze</p>
          <img src={icons.backblaze} alt="backblasze" className={s.namesBox_icon} />
        </div>
        <div className={s.namesBox_name}>
          <div className={s.namesBox_name_controls}>
            <p className={s.namesBox_name_title}>Bunny</p>
            <form className={s.namesBox_form} >
            <label className={s.namesBox_label}>
              HDD
              <input className={s.namesBox_input}onChange={handleChange} type="radio" defaultChecked value="hdd" name="choise" />
            </label>
            <label className={s.namesBox_label}>
              SSD
              <input className={s.namesBox_input}onChange={handleChange} type="radio" value="ssd" name="choise" />
            </label>
                </form>     
          </div>
          <img src={icons.bunny} alt="bunny" className={s.namesBox_icon}/>
                
        </div>
        <div className={s.namesBox_name}>
          <div className={s.namesBox_name_controls}>
            <p className={s.namesBox_name_title}>Scaleway</p>
          <form className={s.namesBox_form}>
            <label className={s.namesBox_label}>
              Multi
              <input className={s.namesBox_input}onChange={handleChange} type="radio" defaultChecked value="multi" name="choise2" />
            </label>
            <label className={s.namesBox_label}>
              Single
              <input className={s.namesBox_input}onChange={handleChange} type="radio" value="single" name="choise2" />
            </label>
                </form>
                
          </div>
          <img src={icons.scaleway} alt="scaleway" className={s.namesBox_icon}/> 
        </div>
        <div className={s.namesBox_name}>
                <p className={s.namesBox_name_title}>Vultr</p>
          <img src={icons.vultr} alt="vultr" className={s.namesBox_icon}/>
        </div>
      </div>
    )
}


export default NamesBox