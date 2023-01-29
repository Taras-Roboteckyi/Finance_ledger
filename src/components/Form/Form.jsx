import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const FormComponent = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must contain at least 3 characters!')
      .max(50, 'Can not contain more than 50 characters!')
      .required(`This is required field!`),
    email: Yup.string()

      .min(3, 'Must contain at least 3 characters!')
      .max(50, 'Can not contain more than 50 characters!')
      .required(`This is required field!`),
  });

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      'bot-field': '',
      'form-name': 'contact',
      name: '',
      email: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => navigate('/thanks'))
        .catch(error => alert(error));
      formik.resetForm({ name: '', email: '' });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      aria-label="Contact information"
      data-netlify="true"
      name="contact"
      action="/my_thank_you.html"
      method="POST"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" />
      <Wrapper>
        <InputWrapper>
          <InputName
            type="text"
            name="name"
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
              <ImgWarning alt="Red danger triangle" />
              <TextError>This is required field!</TextError>
            </ErrorWrapper>
          )}
      </Wrapper>
      <Button type={'submit'} content={'Send'} padding={'56px'}></Button>
    </form>
  );
};
