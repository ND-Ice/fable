import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords does not match")
    .required()
    .label("Confirm Password"),
});

export type SignUpFormFieldsType = {
  email: string;
  password: string;
  confirmPassword: string;
};
