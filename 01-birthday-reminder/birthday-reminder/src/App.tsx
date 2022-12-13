/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUserService } from './services/GetUsersService';
import { User } from './models/User';
import Person from './components/person/Person';

function App() {
  const [users, setUsers] = useState<User[]>(getUserService());
  const handleClearAll = () => setUsers([]);
  return (
    <main className='App'>
      <div className='w-full bg-white max-w-md shadow my-20 py-6 px-8 flex flex-col justify-center items-center border mx-auto rounded-md '>
        <h2 className='text-3xl  text-black  font-semibold'>
          {users.length} Birthdays today
        </h2>
        {users.map((user: User) => (
          <Person
            key={user.id}
            age={user.age}
            id={user.id}
            image={user.image}
            name={user.name}
          />
        ))}
        <button
          className='w-full bg-pink-400 text-white uppercase py-3 rounded-md cursor-pointer hover:bg-pink-500'
          onClick={handleClearAll}
        >
          clear all{' '}
        </button>
      </div>
    </main>
  );
}

export default App;
