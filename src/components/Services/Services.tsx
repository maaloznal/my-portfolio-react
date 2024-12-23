import s from "./s.module.css";

const Services = () => {
  return (
    <div id="services" className={s.servicesSection}>
      <div className={s.servicesMyphoto}>
        <span className={s.servicesTitle}>Services</span>
        <h2 className={s.servicesText}>My Development Services</h2>
      </div>
      <div className={s.servicesBtnMainDiv}>
        <a className={s.servicesA} href="https://github.com/maaloznal">
          <div className={s.servicesDivA}>
            <span className={s.servicesSpan}>View All Services {"\u2192"}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Services;
