import { FormComponent } from "@/components/Form/FormComponent";
import * as Yup from "yup";

export function FormView() {
  return (
    <FormComponent
      submitBtnLabel="Submit"
      schema={Yup.object({
        Email: Yup.string().email().required(),
        Password: Yup.string().min(8).required("Please provide a password"),
      })}
      initialValues={{
        email: "",
        password: "",
      }}
      fields={[
        {
          id: "Email",
          label: "Email",
          fieldType: "email",
          disabled: false,
        },
        {
          id: "Password",
          label: "Password",
          fieldType: "password",
          disabled: false,
        },
      ]}
      onSubmitFn={({ values, setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
      }}
    />
  );
}
