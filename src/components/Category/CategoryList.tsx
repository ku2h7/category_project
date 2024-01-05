import React, { useEffect, useState } from 'react';
import { deleteCategory, getCategories } from '../../api/categoryApi';
import { CategoryData } from '../../interfaces/Category';

const CategoryList: React.FC = () => {
  const token = localStorage.getItem('token') ?? '';
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(token);
        setCategories(response.data.data);
        
        console.log('Dapet bang !')
      } catch (error) {
        console.error(error)
      }
    };
    fetchCategories();
  },[token]);

  const handleEdit = (categoryId: string, categoryName: string, categoryStatus: boolean) => {
    console.log(`edit category with ID: ${categoryId}`);
    console.log(categoryName);
    console.log(categoryStatus);
  };

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteCategory(categoryId, token);
      const updatedCategories = categories.filter((category) => category.id !== categoryId);
      setCategories(updatedCategories);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      



      <h2>Category List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.is_active ? 'Active' : 'Deactive'}</td>
              <td>
                <button onClick={() => handleEdit(category.id, category.name, category.is_active)}>Edit</button>
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <td></td>
        </tbody>
      </table>
    </div>
  )
}

export default CategoryList