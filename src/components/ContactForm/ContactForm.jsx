import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";
import { nanoid } from "nanoid";



const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ContactValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Ім'я профілю є обов'язковим")
        .min(3, "Ім'я профілю має бути мінімум в 3 символи")
        .max(50, "Ім'я профілю має бути меншим за 50 символів"),
    number: Yup.string()
        .matches(
            phoneRegExp,
            "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'"
        )
        .required("Номер телефону є обов'язковий"),
    
})

const INITIAL_VALUES = {
  name: "",
  number: "",
  
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (contact, actions) => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };

    // setUsers([finalContact, ...users]);
    dispatch(addContact(finalContact));

    actions.resetForm();
  };

    
  // const handleSubmit = (values, actions) => {
  //   dispatch(
  //     addProfile({
  //       name: values.contactName,
  //       number: values.contactNumber,
      
  //     })
    

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onAddContact}
      validationSchema={ContactValidationSchema}
    >
      
        <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            type="text"
            name="name"
            placeholder="Микола Зозуля"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>Number</span>
          <Field
            type="tel"
            name="number"
            placeholder="+(38)0501234567"
            
          />
          <ErrorMessage
            className={css.errorText}
            name="number"
            component="span"
          />
        </label>
      

        <button  className={css.submitBtn} type="submit">
          Add Contact
        </button>
      </Form>
      
      
    </Formik>
  );
};

export default ContactForm;
