import LetsWork from '../LetsWork/LetsWork'
import s from './s.module.css'

const Footer = () => {
  return (
    <div className={s.FooterSection}>
      <div className={s.FooterMainDiv}>
        <div className={s.FooterDiv}>
          <div className={s.LetsWork}>
            <span className={s.LetsWorkSpan}>A more meaningful solution for your ideas</span>
            <div>
              <LetsWork/>
            </div>
          </div>
          <div className={s.Links}>
            
          </div>
        </div>
      </div>
      <img src="" alt="" /><img src="" alt="" />
    </div>
  )
}

export default Footer