import s from "./s.module.css";
import viewServicesBtn from '../../../public/ViewAllServices.png'

const Services = () => {
  return (
    <div id="services" className={s.servicesSection}>
      <div className={s.servicesMyphoto}>
        <span className={s.servicesTitle}>Services</span>
        <h2 className={s.servicesText}>My Development Services</h2>
      </div>
      <div className={s.servicesBtnMainDiv}>
        <a className={s.servicesA} href="#">
          <div className={s.servicesDivA}>
            <img src={viewServicesBtn} alt="img" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Services;
