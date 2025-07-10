import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticles } from '../../application/getArticles';
import { Article } from '../../domain/article';

const ArticleDetail = () => {
  const { id } = useParams(); // sebenarnya ini title
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticles().then(data => {
      const found = data.find(item => item.title === id);
      setArticle(found || null);
    });
  }, [id]);

  if (!article) return <p>Artikel tidak ditemukan atau sedang dimuat...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt="" width="100%" />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
