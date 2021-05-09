import React from 'react';
import { Formik, Form, Field } from "formik";
import { fields } from "./fields";
import { initialValues } from './initialValues';
import ButtonForm from '../ButtonForm';

import styles from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {

    const handleSubmit = (values, {resetForm}) => {
        onSubmit(values);
        resetForm();
    }

    return (
        <Formik 
            onSubmit={handleSubmit}
            initialValues={initialValues} >
            <Form className={styles.form}> 
                <label className={styles.label}>
                    Name
                    <Field className={styles.field} {...fields.name} />
                </label>

                <label className={styles.label}>
                    Number
                    <Field  className={styles.field} {...fields.number} />
                </label>
                <ButtonForm/> 
            </Form>
        </Formik>
    )
};

export default ContactForm;

