import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ReactComponent as ImgWarning } from '../../images/form/worning.svg';
import { Button } from '../Button/Button';

import {
  Wrapper,
  InputWrapper,
  ErrorWrapper,
  TextError,
  Label,
  InputName,
  InputEmail,
} from './Form.styled';

export const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must contain at least 3 characters!')
      .max(50, 'Can not contain more than 50 characters!')
      .required(`This is required field!`),
    email: Yup.string()
      /* .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //eslint-disable-line
        'Invalid e-mail',
      ) */
      .min(3, 'Must contain at least 3 characters!')
      .max(50, 'Can not contain more than 50 characters!')
      .required(`This is required field!`),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      formik.resetForm({ name: '', email: '' });
      console.log('values:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <InputWrapper>
          <InputName
            type="text"
            name="name"
            /*  autoComplete="off" */
            placeholder=" "
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
            placeholder=" "
            /* autoComplete="off" */
            onChange={formik.handleChange}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          <Label htmlFor="EmailContact">Enter email *</Label>
        </InputWrapper>

        {formik.errors.name &&
          formik.touched.name &&
          formik.errors.email &&
          formik.touched.email && (
            <ErrorWrapper>
              <ImgWarning />
              <TextError>This is required field!</TextError>
            </ErrorWrapper>
          )}
      </Wrapper>
      <Button type={'submit'} content={'Send'} padding={'56px'}></Button>
    </form>
  );
};
