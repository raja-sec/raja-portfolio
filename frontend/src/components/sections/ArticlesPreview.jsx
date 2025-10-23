import React, { useEffect, useState } from 'react';
import { getArticles } from '../../api/api';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ArticlesPreview() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((res) => setArticles(res.data.articles.slice(0, 3))) // show 3 cards
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-10 text-left">Recent Articles</h2>

      {/* Grid: 1 on small, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card key={article.id}>
            <p className="text-sm text-gray-400 mb-2">{article.date}</p>
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-300 mb-4">{article.summary}</p>
            <Link to={`/articles/${article.slug}`}>
              <Button variant="secondary" className="hover:text-pink-500">Read More →</Button>
            </Link>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/articles">
          <Button>View All Articles</Button>
        </Link>
      </div>
    </section>
  );
}
