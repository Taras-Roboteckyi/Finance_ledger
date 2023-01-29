import { useFormik } from 'formik';
import * as Yup from 'yup';
import qs from 'qs';
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
      console.log('values:', values);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }) /* qs.stringify(...values), */,
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

/* import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from 'react-netlify-forms';
import { useFormik } from 'formik';

export function FormComponent() {
  const netlify = useNetlifyForm({
    name: 'Formik',
    action: '/thanks',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server');
    },
  });
  const { handleSubmit, handleChange, handleBlur, touched, errors, values } = useFormik({
    initialValues: { email: '' },
    onSubmit: values => netlify.handleSubmit(null, values),
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  });

  return (
    <NetlifyFormProvider {...netlify}>
      <NetlifyFormComponent onSubmit={handleSubmit}>
        <Honeypot />
        {netlify.success && (
          <p sx={{ variant: 'alerts.success', p: 3 }}>Thanks for contacting us!</p>
        )}
        {netlify.error && (
          <p sx={{ variant: 'alerts.muted', p: 3 }}>
            Sorry, we could not reach servers. Because it only works on Netlify, our GitHub demo
            does not provide a response.
          </p>
        )}
        <div>
          <label htmlFor="email" sx={{ variant: 'forms.label' }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            sx={{
              variant: 'forms.input',
            }}
          />
          {touched.email && errors.email ? (
            <div sx={{ variant: 'text.error' }}>{errors.email}</div>
          ) : null}
        </div>
        <div sx={{ pt: 3 }}>
          <button type="submit" sx={{ variant: 'buttons.success' }}>
            Submit
          </button>
          <button type="reset" sx={{ variant: 'buttons.danger' }}>
            Reset
          </button>
        </div>
      </NetlifyFormComponent>
    </NetlifyFormProvider>
  );
} */
