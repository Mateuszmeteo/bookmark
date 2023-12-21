import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Container from "../Container/Container"

import styles from './stayUp.module.scss'

const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Whoops, make sure it's on email").required('Required'),
  });


const StayUp = () => {

    const [count, setCount] = useState(35000);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 20000; 

    const updateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const newCount = Math.round(35000 - progress * 35000);
        setCount(newCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(0);
      }
    };

    updateCount();

    return () => {
      setCount(0);
    };
  }, []);

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm(); 
      };


    return (
        <section className={styles.stayUpSection}>
          <Container>
            <div className={styles.containerStay}>
                <ul className={styles.stayUpSection__box}>
                    <li><p className={styles.stayUpSection__box__paraf}>{count.toLocaleString('en-US')}+ already joined</p></li>
                    <li><h2 className={styles.stayUpSection__box__head}>Stay up-to-date with what we're doing</h2></li>
                    <li>
                        <Formik
                            initialValues={{ email: ''}}
                            validationSchema={SignupSchema}
                            onSubmit={handleSubmit}
                            >
                            {({ errors, touched }) => (
                            <Form className={styles.stayUpSection__form}>
                                <Field className={`${styles.stayUpSection__form__input} ${errors.email && touched.email ? styles.error : ''}`} 
                                        name="email" type="email" 
                                        placeholder="Enter your email address" />
                                {errors.email && touched.email ? <div className={styles.stayUpSection__form__err}>{errors.email}</div> : null}
                                <button className={styles.stayUpSection__form__btn} type="submit">Contact Us</button>
                            </Form>
                            )}
                        </Formik>
                    </li>
                </ul>
            </div>
          </Container>
        </section>
    )
}

export default StayUp
