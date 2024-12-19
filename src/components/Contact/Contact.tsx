import s from "./s.module.css";

const Contact = () => {
  return (
    <div className={s.servicesSection}>
      <div className={s.servicesBtnMainDiv}>
        <a className={s.servicesA} href="#About">
          <div className={s.servicesDivA}>
            <span className={s.ContactMeSpan}>Contact Me</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
