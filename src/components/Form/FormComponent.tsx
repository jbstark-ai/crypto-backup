import {
  Formik,
  Field,
  FormikValues,
  FormikErrors,
  FormikTouched,
} from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";

type TFormField = {
  id: string;
  fieldType:
    | "checkbox"
    | "password"
    | "email"
    | "text"
    | "text_area"
    | "text_area_markdown"
    | "image_upload"
    | "file_upload"
    | "number"
    | "username";
  label: string;
  disabled?: boolean;
};
type TFormOnSubmitArgs = {
  values: unknown;
  setSubmitting?: (isSubmitting: boolean) => void;
};
type TFormComponentProps = {
  submitBtnLabel: string;
  initialValues: Record<string, unknown>;
  fields: Array<TFormField>;
  schema: Yup.Schema;
  onSubmitFn: ({ values, setSubmitting }: TFormOnSubmitArgs) => void;
};
type TFormikFormProps = {
  handleChange?: (args?: unknown) => void;
  values: FormikValues;
  errors: FormikErrors<unknown>;
  touched?: FormikTouched<Record<string, unknown>>;
};
function renderFormFieldByFieldType(
  field: TFormField,
  { handleChange, values, errors, touched }: TFormikFormProps
) {
  switch (field.fieldType) {
    case "text_area":
      return (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <Field
            touched={touched}
            type="textarea"
            name={field.id}
            disabled={field.disabled}
            onChange={handleChange}
            value={values[field.id]}
          />
          <FormErrorMessage>{errors[field.id]}</FormErrorMessage>
        </div>
      );
    case "text_area_markdown":
      return (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {/* TODO - Create Field type */}
          <div>TEXT_AREA_MARKDOWN COMPONENT NOT CREATED</div>
        </div>
      );
    case "file_upload":
      return (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {/* TODO - Create Field type */}
          <div>FILE_UPLOAD COMPONENT NOT CREATED</div>
        </div>
      );
    case "image_upload":
      return (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          {/* TODO - Create Field type */}
          <div>IMAGE_UPLOAD COMPONENT NOT CREATED</div>
        </div>
      );
    case "checkbox":
      return (
        <Field
          key={field.id}
          as={Checkbox}
          id={field.id}
          name={field.id}
          colorScheme="purple"
          onChange={handleChange}
          value={values[field.id]}
        >
          {field.label}
        </Field>
      );
    default:
      return (
        <FormControl key={field.id}>
          <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
          <Input
            id={field.id}
            name={field.id}
            type={field.fieldType}
            variant="filled"
            onChange={handleChange}
            value={values[field.id]}
          />
          {errors[field.id] && touched[field.id] && (
            <Text color="red">{errors[field.id]}</Text>
          )}
        </FormControl>
      );
  }
}

export function FormComponent({
  submitBtnLabel,
  initialValues,
  fields,
  schema,
  onSubmitFn,
}: TFormComponentProps) {
  return (
    <Box bg="white" p={6} rounded="md" w={64}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: unknown, { setSubmitting }) =>
          onSubmitFn({ values, setSubmitting })
        }
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            onChange={(e) => {
              handleChange(e);
              console.log(values);
            }}
          >
            <VStack spacing={4} align="flex-start">
              {fields.map((field) =>
                renderFormFieldByFieldType(field, {
                  handleChange,
                  values,
                  errors,
                  touched,
                })
              )}
              <Button type="submit" colorScheme="purple" width="full">
                {submitBtnLabel}
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
