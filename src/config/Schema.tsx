import * as yup from "yup";
export const SignupSchema = yup.object().shape({
  firstName: yup.string().required("Firstname Is Required"),
  lastName: yup.string().required("Lastname Is Required"),
  address: yup.string().required("Address Is Required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field is required"),
  sex: yup.string().required("Sex is required"),
  grade: yup.string().required("Grade is required"),
  password: yup.string().min(8).required("This Field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords Don't Match")
    .required(),
});
