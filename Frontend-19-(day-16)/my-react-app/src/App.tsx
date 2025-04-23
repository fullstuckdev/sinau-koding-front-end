import { useState } from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import NewArticleForm from './components/NewArticleForm';

type ArticleType = {
  title: string;
  author: string;
  date: string;
  content: string;
};

const App = () => {
  const [articles, setArticles] = useState<ArticleType[]>([
    {
      title: 'Mengapa React.js Sangat Populer?',
      author: 'Taufik Mulyawan',
      date: '23 April 2025',
      content: 'React.js adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna...',
    },
  ]);

  console.log(articles)

  const addArticle = (newArticle: ArticleType) => {
    setArticles([newArticle, ...articles]);
  };

  return (
    <div className="container">
      <Header />
      <NewArticleForm onAdd={addArticle} />
      <main>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            author={article.author}
            date={article.date}
            content={article.content}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;