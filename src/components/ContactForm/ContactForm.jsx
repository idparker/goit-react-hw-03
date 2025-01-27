import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .trim()
      .required("Required"),

    number: Yup.string()
      .matches(/^\d+$/, "Not a number")
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    username: "",
    number: "",
  };

  const HandleAdd = (values, actions) => {
    console.log(values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleAdd}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label htmlFor={usernameId}>Name</label>
          <Field name="username" id={usernameId}></Field>
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />

          <label htmlFor={numberId}>Number</label>
          <Field name="number" id={numberId}></Field>
          <ErrorMessage name="number" component="span" className={css.error} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
