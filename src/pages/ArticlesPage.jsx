import {useParams} from 'react-router-dom';
import articles from '../articles.js';

const ArticlePage = () => {
  const {id} = useParams ();
  const article = articles.find (article => article.id === parseInt (id));

  if (!article) {
    return <div> <h1> Article with number with param  </h1> </div>;
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
