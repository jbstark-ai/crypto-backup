// import axios from "axios";
import { z } from "zod";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const formFields = [
  {
    id: "wallet",
    fieldType: "text",
    validation: z.string(),
    label: "Wallet Address",
    disabled: true,
  },
  {
    id: "username",
    fieldType: "text",
    validation: z.string(),
    label: "Username",
  },
  {
    id: "email",
    fieldType: "email",
    label: "Email",
  },
  {
    id: "avatar",
    fieldType: "image_upload",
    label: "Avatar",
  },
  {
    id: "bio",
    fieldType: "text_area",
    label: "Bio",
  },
];
export const SignUpUserFormSchema = z.object({
  wallet: z.string(),
  username: z.string().max(100),
  email: z.string().email(),
  avatar: z.string().url(),
  bio: z.string().max(255),
});

export default function FormSignIn() {
  return (
    <Formik
      initialValues={{ example: "", exampleRequired: "" }}
      validationSchema={SignUpUserFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
export type TSignUpUserFormSchema = z.infer<typeof SignUpUserFormSchema>;
