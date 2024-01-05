import React from 'react'
import { useFormik } from 'formik';
import { RegisterData } from './../../interfaces/Auth';
import { userRegister } from './../../api/authApi';
import * as ValidationSchemas from './../../validations/valdiationSchemas';


const RegisterForm: React.FC = () => {
  const { RegisterSchema } = ValidationSchemas;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values: RegisterData) => {
      try {
        await userRegister(values);
        console.log('Udah jadi akunnya bang!');
      } catch (error) {
        console.error(error);
      }
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
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
        <button type="submit">Register</button>
      </div>
    </form>
  )
}

export default RegisterForm