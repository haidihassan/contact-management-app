import React, { useState } from "react"; 
import { Formik, Form, Field } from "formik";
import { contactFormValidationSchema } from "./validationSchemas";
import "./ContactForm.css";
import SelectField from "./SelectField"; 
import { Button, Grid } from "@mui/material";
import Loader from "./Loader";

const ContactForm = ({ addContact, currentContact }) => {
  const [loading, setLoading] = useState(false); 
  const options = [
    { value: "Personal", label: "Personal" },
    { value: "Business", label: "Business" },
  ];

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true); 
    try {
      await addContact({
        ...values,
        id: currentContact ? currentContact.id : null,
      });
      resetForm();
    } catch (error) {
      console.error("Error adding contact:", error);
    } finally {
      setLoading(false); 
    }
  };

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
        onSubmit={handleSubmit} 
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={touched.name && errors.name ? "error-border" : ""}
                />
                {touched.name && errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </Grid>

              <Grid item xs={12}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={touched.email && errors.email ? "error-border" : ""}
                />
                {touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </Grid>

              <Grid item xs={12}>
                <SelectField fieldName="contactType" options={options} />
              </Grid>

              <Grid item xs={12}>
                <Field
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  className={touched.jobTitle && errors.jobTitle ? "error-border" : ""}
                />
                {touched.jobTitle && errors.jobTitle && (
                  <div className="error-message">{errors.jobTitle}</div>
                )}
              </Grid>

              <Grid item xs={12}>
                <Field
                  as="textarea"
                  name="notes"
                  placeholder="Notes"
                  className="notes-textarea" 
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#1565C0",
                    color: "#fff",
                    marginLeft: 0,
                    position: 'relative', 
                  }}
                  disabled={loading} 
                >
                  {loading ? (
                    <Loader message="Adding Contact..." /> 
                  ) : (
                    "Add Contact"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
