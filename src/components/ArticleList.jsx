import articles from "../data"

const ArticleList = () => {
    return(
        <div className="article">
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
    )
}

export default ArticleList