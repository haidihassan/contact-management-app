import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactFormValidationSchema } from "./validationSchemas"; 
import "./ContactForm.css";

const ContactForm = ({ addContact, currentContact }) => {
  return (
    <div className="contact-form-card">
      <Formik
        initialValues={{
          name: currentContact ? currentContact.name : "",
          email: currentContact ? currentContact.email : "",
          contactType: currentContact ? currentContact.contactType : "",
          jobTitle: currentContact ? currentContact.jobTitle : "",
          notes: currentContact ? currentContact.notes : "",
        }}
        validationSchema={contactFormValidationSchema} 
        onSubmit={(values, { resetForm }) => {
          addContact({
            ...values,
            id: currentContact ? currentContact.id : null,
          });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />

            <Field as="select" name="contactType">
              <option value="" label="Select contact type" />
              <option value="Personal" label="Personal" />
              <option value="Business" label="Business" />
            </Field>
            <ErrorMessage name="contactType" component="div" className="error" />

            <Field type="text" name="jobTitle" placeholder="Job Title" />
            <ErrorMessage name="jobTitle" component="div" className="error" />

            <Field as="textarea" name="notes" placeholder="Notes" />

            <button type="submit">Add Contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
