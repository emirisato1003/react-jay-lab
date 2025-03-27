import React, { useState } from 'react';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    // <>
    //   <Header />
    //   <ArticleList />
    //   <Footer />
    // </>
  );
}

export default App

