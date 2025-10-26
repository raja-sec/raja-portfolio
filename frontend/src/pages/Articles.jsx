// import React, { useEffect, useState } from 'react';
// import { getArticles } from '../api/api';
// import { Link } from 'react-router-dom';
// import Card from '../components/ui/Card';

// export default function Articles() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getArticles()
//       .then((res) => {
//         // console.log("API response:", res.data.articles);
//         setArticles(res.data.articles);
//         setLoading(false);
//       })
// //       .then((res) => {
// //   console.log("API response:", res.data);
// //   setArticle(res.data);
// //   setLoading(false);
// // })

//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-20 mt-16">
//         <p className="text-center text-gray-400">Loading articles...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-20 mt-16">
//       <h1 className="text-5xl font-bold mb-4 text-center">Articles</h1>
//       <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
//         Technical articles and thoughts on software development.
//       </p>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {articles.map((article) => (
//           <Card key={article.slug}>
//             <p className="text-sm text-gray-500 mb-2">{article.date}</p>
//             <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>
//             <p className="text-gray-400 mb-4">{article.summary}</p>
//             <Link
//               to={`/articles/${article.slug}`}
//               className="text-accent hover:underline inline-flex items-center"
//             >
//               Read More →
//             </Link>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { getArticles } from '../api/api';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import SubjectBadge from '../components/ui/SubjectBadge';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getArticles()
    .then((res) => {
      setArticles(res.data.articles);
      setLoading(false);
    })
    .catch((err) => {
      console.error("❌ Fetch error:", err);
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16">
        <p className="text-center text-gray-400">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 mt-16">
      <h1 className="text-5xl font-bold mb-4 text-center">Articles</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Technical articles and thoughts on software development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col">
            {/* ✅ Safe: subject will always exist now */}
            <div className="mb-3">
              <SubjectBadge subject={article.subject} size="sm" />
            </div>

            
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{article.summary}</p>
            <p className="text-sm text-gray-400 mb-2">{article.date}</p>

            <Link
              to={`/articles/${article.slug}`}
              className="text-accent hover:underline inline-flex items-center mt-auto"
            >
              Read More →
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
