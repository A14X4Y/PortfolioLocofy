import { Form } from './Form/Form';
import styles from './Contact.module.css';
import { SocialList } from './SocialList/SocialList';
const Contact = () => {
  return (
    <div
      className={styles.contact}
      id="contact"
    >
      <div className={styles.social}>
        <div className={styles.titlecontact}>Мои контакты</div>
        <SocialList />
      </div>
      <Form />
    </div>
  );
};

export { Contact };
