import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpFormFieldsType, signUpSchema } from "./model";
import signInBanner from "@/assets/images/sign-in-banner.png";
import FormInput from "@/components/form-elements/form-input";
import MainLayout from "@/layouts/main-layout";

function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormFieldsType>({ resolver: yupResolver(signUpSchema) });

  const onSignInClicked = () => router.push("/sign-in");

  const handleFormSubmit = (values: SignUpFormFieldsType) =>
    alert(JSON.stringify(values, null, 2));

  return (
    <MainLayout>
      <main className="mb-20 p-5 md:px-14">
        <header className="mb-5">
          <div className="flex items-center gap-5">
            <h1 className="text-caption-2 font-bold">Home</h1>
            <div className="h-[2px] w-5 bg-secondary" />
            <h1 className="text-caption-2 font-bold">Sign In</h1>
          </div>
        </header>
        <div className="flex gap-x-20">
          <form className="flex-1" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 className="my-10 text-sub-title">Sign in Account</h1>
            <div className="space-y-4">
              <FormInput
                register={register}
                errors={errors}
                name="email"
                label="Email Address"
                placeholder="Email Address"
              />
              <FormInput
                register={register}
                errors={errors}
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
              />
              <FormInput
                register={register}
                errors={errors}
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mt-5 flex gap-5">
              <button type="submit" className="bg-light-green text-white">
                Sign Up
              </button>
              <button
                type="button"
                onClick={onSignInClicked}
                className="bg-gray text-white"
              >
                Sign In
              </button>
            </div>
          </form>
          <Image
            src={signInBanner}
            alt="Sign in Banner"
            className="hidden flex-1 xl:block"
          />
        </div>
      </main>
    </MainLayout>
  );
}

export default SignUp;
