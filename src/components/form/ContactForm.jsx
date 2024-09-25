import React from "react";
import { Formik, Form, Field } from "formik";
import { contactFormValidationSchema } from "./validationSchemas";
import "./ContactForm.css";
import Select from "react-select";
import customSelectStyles from "./customSelectStyles";

const ContactForm = ({ addContact, currentContact }) => {
  const options = [
    { value: "Personal", label: "Personal" },
    { value: "Business", label: "Business" },
  ];

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
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={touched.name && errors.name ? "error-border" : ""}
            />
            {touched.name && errors.name && (
              <div className="error-message">{errors.name}</div>
            )}

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={touched.email && errors.email ? "error-border" : ""}
            />
            {touched.email && errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

            <Select
              name="contactType"
              options={options}
              placeholder="Select Contact Type"
              isSearchable={false}
              styles={customSelectStyles(
                touched.contactType && errors.contactType
              )}
              onChange={(option) => setFieldValue("contactType", option.value)}
            />
            {touched.contactType && errors.contactType && (
              <div className="error-message">{errors.contactType}</div>
            )}
            <Field
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className={
                touched.jobTitle && errors.jobTitle ? "error-border" : ""
              }
            />
            {touched.jobTitle && errors.jobTitle && (
              <div className="error-message">{errors.jobTitle}</div>
            )}

            <Field as="textarea" name="notes" placeholder="Notes" />

            <button type="submit">Add Contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
