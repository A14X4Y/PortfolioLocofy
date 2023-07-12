import Form from "./form";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.social}>
        <div className={styles.titlecontact}>Мои контакты</div>
        <div className={styles.sociallist}>
          <img
            className={styles.vuesaxboldfacebookIcon}
            alt=""
            src="/vuesaxboldfacebook.svg"
          />
          <img
            className={styles.vuesaxboldfacebookIcon}
            alt=""
            src="/vuesaxboldinstagram.svg"
          />
          <img
            className={styles.vuesaxboldfacebookIcon}
            alt=""
            src="/vuesaxboldsms.svg"
          />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
