import React, { useState } from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './UserCard';
import './App.css';

const users = [
  {
    id: 1,
    name: "Emiri",
    age: 27,
    location: "WA",
    gender: 'female'
  },
  {
    id: 2,
    name: "Zyam",
    age: 25,
    location: "WA",
    gender: "male"
  },
  {
    id: 3,
    name: "Kriza",
    age: 27,
    location: "WA",
    gender: 'female'
  },
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      {users.map((user) =>
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          location={user.location}
          borderColor={user.gender === 'male' ? '2px solid blue' : '1px solid purple'}
        />
      )}

    </div>
    // <>
    //   <Header />
    //   <ArticleList />
    //   <Footer />
    // </>
  );
}

export default App

