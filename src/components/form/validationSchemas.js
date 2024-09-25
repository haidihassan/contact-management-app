import * as Yup from "yup";

export const contactFormValidationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .required("Email is required")
    .email("Use the correct email format")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Use the correct email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/,
      "Email must be a valid Gmail, Yahoo, or Hotmail address"
    ),
  contactType: Yup.string().required("Contact type is Required"),
  jobTitle: Yup.string().required("Job Title is Required"),
  notes: Yup.string(),
});
