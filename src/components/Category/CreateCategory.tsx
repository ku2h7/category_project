import React from 'react'
import { useFormik } from 'formik';
import { CreateCategoryData } from './../../interfaces/Category';
import { createCategory } from './../../api/categoryApi';
import * as ValidationSchemas from './../../validations/valdiationSchemas';


const CreateCategory: React.FC = () => {
  const { CreateCategorySchema } = ValidationSchemas;
  const token = localStorage.getItem('token') ?? '';

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: CreateCategorySchema,
    onSubmit: async (values: CreateCategoryData) => {
      try {
        await createCategory({name: values.name}, token);
        console.log('Berhasil bikin category bang!');
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
        <button type="submit">Create Category</button>
      </div>
    </form>
  )
}

export default CreateCategory;