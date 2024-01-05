import React from 'react'
import { useFormik } from 'formik';
import { LoginData } from './../../interfaces/Auth';
import { userLogin } from './../../api/authApi';
import * as ValidationSchemas from './../../validations/valdiationSchemas';


const RegisterForm: React.FC = () => {
  const { LoginSchema } = ValidationSchemas;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values: LoginData) => {
      try {
        const response = await userLogin(values);
        const token = response.data.data.token;

        localStorage.setItem('token', token);

        console.log('Udah login bang!');
      } catch (error) {
        console.error(error);
      }
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default RegisterForm