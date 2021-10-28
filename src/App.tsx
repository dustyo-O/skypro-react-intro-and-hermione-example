import React from 'react';
import './App.css';
import { LikeButton } from './components/LikeButton/LikeButton';
import { RegisterForm } from './components/RegisterForm/RegisterForm';
import { StatusesDashboard } from './components/StatusesDashboard/StatusesDashboard';
import { User } from './components/User/User';

function App() {
  console.log('App');
  const users = ['dusty', 'admin', undefined];

  return (
    <div className="App">
      <StatusesDashboard />
      {
        users.map((user) => (
          <User key={String(user)} userName={user}/>
        ))
      }
      <LikeButton />
      <RegisterForm />
    </div>
  );
}

export default App;
