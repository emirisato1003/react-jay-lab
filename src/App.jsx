import React from 'react'
import {articles} from './data'
import './App.css'

function App() {  
  return (
      <main>
      <div>
        {articles.map((article) => (
          <>
          <h1>{article.title}</h1>
          <span>{article.author} | {article.publicationDate}</span>
          <img src={article.imgUrl} />
          <p>{article.body}</p>
          <hr />
          </>
        ))}
      </div>
      <h2>Second element</h2>
      </main>
  )
}

export default App

