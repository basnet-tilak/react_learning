import {useParams} from 'react-router-dom';
import articles from '../articles.js';
import NotFoundPage from './NotFoundPage.jsx';
const ArticlePage = () => {
  const {id} = useParams ();
  const article = articles.find (article => article.id === parseInt (id));

  if (!article) {
    return (
      <div>
        <h2> This is Article page </h2>
        <NotFoundPage />
        <h4>
          This is article page if you want read the article, <br />
          Article must with param  like .... localhost:3000/article/1 or 2
        </h4>
      </div>
    );
  }

  const {name, title, content} = article;

  return (
    <div>
      <h1>Read Article</h1>
      <div>
        <h2>{title}</h2>
        <p>By: {name}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
