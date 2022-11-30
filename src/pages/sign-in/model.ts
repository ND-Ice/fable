import * as Yup from "yup";

export type SignInFormFieldsType = {
  email: string;
  password: string;
};

export const signInSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});
