import React, { ChangeEvent  } from 'react'
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
                <p>Backblaze</p>
                <span className={s.namesBox_icon}>Icon</span>
        </div>
        <div className={s.namesBox_name}>
                <p>Bunny</p>
                <span className={s.namesBox_icon}>Icon</span>
                <form >
            <label>
              HDD
              <input onChange={handleChange} type="radio" defaultChecked value="hdd" name="choise" />
            </label>
            <label>
              SSD
              <input onChange={handleChange} type="radio" value="ssd" name="choise" />
            </label>
                </form>
        </div>
        <div className={s.namesBox_name}>
                <p>Scaleway</p>
                <span className={s.namesBox_icon}>Icon</span>
                <form>
            <label>
              Multi
              <input onChange={handleChange} type="radio" defaultChecked value="multi" name="choise2" />
            </label>
            <label>
              Single
              <input onChange={handleChange} type="radio" value="single" name="choise2" />
            </label>
                </form>
        </div>
        <div className={s.namesBox_name}>
                <p>Vultr</p>
                <span className={s.namesBox_icon}>Icon</span>
        </div>
      </div>
    )
}


export default NamesBox