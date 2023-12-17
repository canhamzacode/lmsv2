import * as yup from "yup";
export const SignupSchema = yup.object().shape({
  first_name: yup.string().required("Firstname Is Required"),
  last_name: yup.string().required("Lastname Is Required"),
  address: yup.string().required("Address Is Required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  gender: yup.string().required("Gender is required"),
  grade: yup.string().required("Grade is required"),
  password: yup.string().min(8).required("This Field is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
    .required(),
});

export const AdminLoginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8).required("This Field is required"),
});

export const ResultSchema = yup.object().shape({
  mathematics: yup.number().required("Mathematics is required"),
  english: yup.number().required("English is required"),
  civic: yup.number().required("Civic is required"),
  physics: yup.number().required("Physics is required"),
  chemistry: yup.number().required("Chemistry is required"),
  health_education: yup.number().required("Health Education is required"),
});

export const StudentLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email format")
    .required("Email is required"),
  password: yup.string().min(8).required("This Field is required"),
});
