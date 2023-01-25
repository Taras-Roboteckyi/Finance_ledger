import { InputName, InputEmail, InputWrapper, Label, ErrorWrapper, TextError } from './Form.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdWarning } from 'react-icons/md';

export const Form = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Invalid e-mail',
      )
      .min(3, 'Must contain at least 3 characters!')
      .max(254, 'Can not contain more than 254 characters!')
      .required(`This is required field!`),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      formik.resetForm({ name: '', email: '' });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <InputName
          type="text"
          name="name"
          autoComplete="off"
          /* placeholder="Enter your name" */
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('name')}
          value={formik.values.name}
        />
        <Label htmlFor="NameContact">Enter your name</Label>
      </InputWrapper>

      <InputWrapper>
        <InputEmail
          type="email"
          name="email"
          /* placeholder="Enter email *" */
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
        />
        <Label htmlFor="EmailContact">Enter email *</Label>
      </InputWrapper>

      {formik.errors.email && formik.touched.email && (
        <ErrorWrapper>
          <MdWarning color="red" />
          <TextError>{formik.errors.email}</TextError>
        </ErrorWrapper>
      )}

      <button type="submit">Send</button>
    </form>
  );
};
