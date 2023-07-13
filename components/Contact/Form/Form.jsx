import styles from './Form.module.css';
import { Button } from '../../UI/Button/Button';
import { useForm } from 'react-hook-form';
import { Input } from './Input/Input';
import { $axios } from '../../../api/instance';
import {toast} from "react-toastify"
const Form = () => {
  const { handleSubmit, register, formState: {isValid, errors}, watch} = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    if (!isValid) {
      return
    }
    const endpoint = "/api/contact"
    const res = await $axios.post(endpoint, data)
    if (res.statusText === "OK") {
      toast.success('Сообщение успешно доставлено', {
        position: "top-center"
      })
    } else {
      toast.error(res.data, {
        position: "top-center"
      })
    }
  };


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.text}>
        Свяжитесь со мной, давайте творить волшебство вместе
      </div>
      <div className={styles.forminputs}>
        <Input 
          label='Имя'
          name = "name"
          errors = {errors}
          register={...register("name", {
            required: {
                value: true,
                message: "Заполните поле"
            },
            minLength: {
              value: 2,
              message: "Введите имя"
            }
          })}/>
        <Input 
          label="Email"
          name = "email"
          errors = {errors}

          register={...register("email", {
            required: {
              value: true,
              message: "Заполните поле"
          }, 
          minLength: {
            value: 2,
            message: "Введите email"
          },
          pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Введите корректный email'
            }
        })}/>
        <Input 
        label = "Сообщение"
        name ="message"
        errors = {errors}

        register={...register("message", {
          required: {
              value: true,
              message: "Заполните поле"
          },
          minLength: {
            value: 10,
            message: "Минимальное количество символов 10"
          },

        })}/>
      </div>
      <Button variant="contained" type = "submit">Отправить</Button>
    </form>
  );
};

export { Form };
