import React from 'react';
import './App.css';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import CategoryList from './components/Category/CategoryList';
import CreateCategory from './components/Category/CreateCategory';

const App = () => {
  return (
    <div>
      <RegisterForm />
      <br/>
      <LoginForm />
      <br/>
      <CreateCategory/>
      <br/>
      <CategoryList />
    </div>
  )
}

export default App