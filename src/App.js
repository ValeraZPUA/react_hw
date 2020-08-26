import React, { Component } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Counter from './components/Сounter';

const user = {
  name: 'John',
  lastName: 'Smith',
  avatarLink:
    'https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg',
  comment: 'Some text about something',
  commentDate: new Date(),
};

const App = () => {
  return (
    <>
      <UserCard user={user} />
      <Counter />
    </>
  );
};

export default App;
