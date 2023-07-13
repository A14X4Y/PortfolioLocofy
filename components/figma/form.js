import styles from "./form.module.css";
const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.text}>
        Свяжитесь со мной, давайте творить волшебство вместе
      </div>
      <div className={styles.forminputs}>
        <div className={styles.input}>
          <div className={styles.label}>Имя:</div>
          <img className={styles.inputIcon} alt="" src="/input.svg" />
        </div>
        <div className={styles.input1}>
          <div className={styles.label1}>Email:</div>
          <input
            className={styles.input2}
            type="text"
            maxLength={0}
            minLength
          />
        </div>
        <div className={styles.input}>
          <div className={styles.label2}>Сообщение:</div>
          <input className={styles.input4} type="text" maxLength minLength />
        </div>
      </div>
      <button className={styles.buttoncontained}>
        <div className={styles.text1}>Отправить</div>
      </button>
    </form>
  );
};

export default Form;
