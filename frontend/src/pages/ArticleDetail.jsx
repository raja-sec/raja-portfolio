import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../api/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleBySlug(slug)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16">
        <p className="text-center text-gray-400">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="text-accent hover:underline">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  const { meta, content } = article;

  return (
    <div className="container mx-auto px-4 py-20 mt-16 max-w-4xl text-gray-200">
      <Link to="/articles" className="text-accent hover:underline mb-8 inline-block">
        ← Back to Articles
      </Link>

      <p className="text-sm text-gray-400 mb-2">{meta.date}</p>
      <h1 className="text-4xl text-pink-300 font-bold mb-6">{meta.title}</h1>

<div className="prose prose-invert max-w-none leading-relaxed">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {content}
  </ReactMarkdown>
</div>

    </div>
  );
}
